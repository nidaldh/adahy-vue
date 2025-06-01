<template>
  <div class="animals-table-container" dir="rtl">
    <!-- Search and Filter Controls -->
    <div class="controls-section">
      <div class="search-controls">
        <div class="search-group">
          <input v-model="searchQuery" type="text" placeholder="البحث بالنوع، الرقم، الملاحظات، أو اسم العميل..."
            class="search-input" />
          <i class="fas fa-search search-icon"></i>
        </div>

        <div class="filter-group">
          <select v-model="selectedType" class="filter-select">
            <option value="">جميع الأنواع</option>
            <option v-for="type in availableTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>

          <select v-model="selectedStatus" class="filter-select">
            <option value="">جميع الحالات</option>
            <option value="حي">حي</option>
            <option value="جاهز">جاهز</option>
            <option value="مذبوح">مذبوح</option>
            <option value="ملغي">ملغي</option>
          </select>
        </div>
      </div>

      <div class="summary-info">
        <span class="summary-item">
          <i class="fas fa-list-ol"></i>
          إجمالي الأضاحي: {{ filteredAnimals.length }}
        </span>
        <span class="summary-item">
          <i class="fas fa-calculator"></i>
          إجمالي الوزن: {{ totalWeight.toFixed(2) }} كجم
        </span>
      </div>
    </div>

    <!-- Animals Table -->
    <div class="table-responsive">
      <div class="sort-options">
        <label>ترتيب حسب:</label>
        <select v-model="sortField" class="sort-select">
          <option value="type">النوع</option>
          <option value="number">الرقم</option>
          <option value="weight">الوزن</option>
          <option value="status">الحالة</option>
          <option value="notes">الملاحظات</option>
          <option value="customerName">اسم العميل</option>
          <option value="compositeKey" title="ترتيب فريد يجمع بين النوع والرقم">المفتاح المركب (النوع_الرقم)</option>
        </select>
        <select v-model="sortDirection" class="sort-select">
          <option value="asc">تصاعدي</option>
          <option value="desc">تنازلي</option>
        </select>
      </div>
      <table class="animals-table">
        <thead>
          <tr>
            <th>النوع</th>
            <th>الرقم</th>
            <th>الوزن (كجم)</th>
            <th>الحالة</th>
            <th>الملاحظات</th>
            <th>اسم العميل</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="animal in paginatedAnimals" :key="`${animal.customerId}-${animal.id}`">
            <td>{{ animal.type }}</td>
            <td>{{ animal.number }}</td>
            <td class="number">{{ animal.weight.toFixed(2) }}</td>
            <td>
              <span class="status-badge" :class="getStatusClass(animal.status)">
                {{ animal.status }}
              </span>
            </td>
            <td class="notes-cell">
              <span v-if="animal.notes" class="notes-content">{{ animal.notes }}</span>
              <span v-else class="no-notes">-</span>
            </td>
            <td class="customer-name">{{ animal.customerName }}</td>
            <td class="actions">
              <button @click="navigateToCustomerRelationships(animal.customerId, animal.id)" class="btn btn-info btn-sm"
                :title="`عرض تفاصيل العميل ${animal.customerName}`">
                <i class="fas fa-info-circle"></i>
                تفاصيل
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination-container">
      <div class="pagination">
        <button @click="currentPage = 1" :disabled="currentPage === 1" class="btn btn-sm">
          <i class="fas fa-angle-double-right"></i>
        </button>
        <button @click="currentPage--" :disabled="currentPage === 1" class="btn btn-sm">
          <i class="fas fa-angle-right"></i>
        </button>

        <span class="page-info">
          صفحة {{ currentPage }} من {{ totalPages }}
        </span>

        <button @click="currentPage++" :disabled="currentPage === totalPages" class="btn btn-sm">
          <i class="fas fa-angle-left"></i>
        </button>
        <button @click="currentPage = totalPages" :disabled="currentPage === totalPages" class="btn btn-sm">
          <i class="fas fa-angle-double-left"></i>
        </button>
      </div>

      <div class="page-size-selector">
        <label>عدد الصفوف:</label>
        <select v-model="pageSize" @change="currentPage = 1">
          <option :value="25">25</option>
          <option :value="50">50</option>
          <option :value="100">100</option>
          <option :value="200">200</option>
        </select>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredAnimals.length === 0" class="empty-state">
      <i class="fas fa-search fa-3x"></i>
      <h3>لا توجد أضاحي</h3>
      <p v-if="searchQuery || selectedType || selectedStatus">
        لا توجد نتائج تطابق معايير البحث الحالية
      </p>
      <p v-else>
        لا توجد أضاحي مسجلة في النظام حالياً
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import type { Animal } from '@/store/modules/customers';

interface AnimalWithCustomer extends Animal {
  customerName: string;
  customerId: string;
}

const props = defineProps<{
  animals: AnimalWithCustomer[];
  loading?: boolean;
}>();

const router = useRouter();

// Search and filter state
const searchQuery = ref('');
const selectedType = ref('');
const selectedStatus = ref('');

// Sorting state
const sortField = ref<keyof AnimalWithCustomer>('type'); // Default sort by type
const sortDirection = ref<'asc' | 'desc'>('asc');

// Pagination state
const currentPage = ref(1);
const pageSize = ref(50);

// Available types for filter dropdown
const availableTypes = computed(() => {
  const types = new Set(props.animals.map(animal => animal.type));
  return Array.from(types).sort((a, b) => a.localeCompare(b, 'ar'));
});

// Filtered animals based on search and filters
const filteredAnimals = computed(() => {
  let filtered = [...props.animals];

  // Apply search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    filtered = filtered.filter(animal =>
      animal.compositeKey.toLowerCase().includes(query) ||
      animal.type.toLowerCase().includes(query) ||
      animal.number.toLowerCase().includes(query) ||
      (animal.notes && animal.notes.toLowerCase().includes(query)) ||
      animal.customerName.toLowerCase().includes(query)
    );
  }

  // Apply type filter
  if (selectedType.value) {
    filtered = filtered.filter(animal => animal.type === selectedType.value);
  }

  // Apply status filter
  if (selectedStatus.value) {
    filtered = filtered.filter(animal => animal.status === selectedStatus.value);
  }

  // Apply sorting
  filtered.sort((a, b) => {
    const aValue = a[sortField.value];
    const bValue = b[sortField.value];

    let comparison = 0;
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      comparison = aValue.localeCompare(bValue, 'ar');
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      comparison = aValue - bValue;
    } else {
      comparison = String(aValue).localeCompare(String(bValue), 'ar');
    }

    return sortDirection.value === 'asc' ? comparison : -comparison;
  });

  return filtered;
});

// Pagination computed properties
const totalPages = computed(() => Math.ceil(filteredAnimals.value.length / pageSize.value));

const paginatedAnimals = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return filteredAnimals.value.slice(startIndex, endIndex);
});

// Summary calculations
const totalWeight = computed(() => {
  return filteredAnimals.value.reduce((sum, animal) => sum + animal.weight, 0);
});

// Total value computation (commented out as not currently used)
// const totalValue = computed(() => {
//   return filteredAnimals.value.reduce((sum, animal) => sum + animal.total, 0);
// });

// Methods
const getStatusClass = (status: string) => {
  switch (status) {
    case 'حي': return 'status-alive';
    case 'جاهز': return 'status-ready';
    case 'مذبوح': return 'status-slaughtered';
    case 'ملغي': return 'status-cancelled';
    default: return '';
  }
};

// Currency formatting function (commented out as not currently used)
// const formatCurrency = (amount: number): string => {
//   return new Intl.NumberFormat('ar-PS', {
//     style: 'currency',
//     currency: 'ILS',
//     minimumFractionDigits: 2
//   }).format(amount);
// };

const navigateToCustomerRelationships = (customerId: string, animalId?: string) => {
  const query: Record<string, string> = { customerId };
  if (animalId) {
    query.highlightAnimalId = animalId;
  }
  router.push({
    name: 'CustomerRelationships',
    query
  });
};

// Reset page when filters change
watch([searchQuery, selectedType, selectedStatus], () => {
  currentPage.value = 1;
});

// Reset page when page size changes
watch(pageSize, () => {
  currentPage.value = 1;
});

// Reset page when sort options change
watch([sortField, sortDirection], () => {
  currentPage.value = 1;
});
</script>

<style scoped lang="scss">
.animals-table-container {
  padding: 20px;
}

.controls-section {
  margin-bottom: 20px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.search-controls {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.search-group {
  position: relative;
  flex: 1;
  min-width: 300px;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
}

.filter-group {
  display: flex;
  gap: 10px;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  font-size: 14px;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
}

.summary-info {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  color: #495057;

  i {
    color: #007bff;
  }
}

.table-responsive {
  overflow-x: auto;
  margin: 20px 0;

  .sort-options {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    label {
      font-weight: 500;
      color: #495057;
    }

    .sort-select {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      background: white;
      font-size: 14px;
      min-width: 120px;

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }
  }
}

.sort-options {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  label {
    font-size: 14px;
    color: #495057;
  }

  .sort-select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    font-size: 14px;
    min-width: 150px;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
}

.animals-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #e9ecef;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
    color: #495057;
    position: sticky;
    top: 0;
    z-index: 10;

    &.sortable {
      cursor: pointer;
      user-select: none;
      transition: background-color 0.2s;

      &:hover {
        background: #e9ecef;
      }

      i {
        margin-right: 5px;
        opacity: 0.5;
        transition: opacity 0.2s;
      }

      &:hover i {
        opacity: 1;
      }
    }
  }

  tbody tr {
    transition: background-color 0.2s;

    &:hover {
      background: #f8f9fa;
    }
  }
}

.composite-key {
  font-family: monospace;
  font-weight: 500;
  background: #f8f9fa;
  border-radius: 4px;
  padding: 4px 8px;
  display: inline-block;
}

.number {
  text-align: left !important;
  font-weight: 500;

  &.total {
    color: #28a745;
    font-weight: 600;
  }
}

.customer-name {
  font-weight: 500;
  color: #007bff;
}

.notes-cell {
  max-width: 200px;

  .notes-content {
    display: block;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9rem;
    max-width: 100%;

    &:hover {
      white-space: normal;
      word-wrap: break-word;
      cursor: help;
    }
  }

  .no-notes {
    color: #aaa;
  }
}

.status-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;

  &.status-alive {
    background: #d4edda;
    color: #155724;
  }

  &.status-ready {
    background: #fff3cd;
    color: #856404;
  }

  &.status-slaughtered {
    background: #f8d7da;
    color: #721c24;
  }

  &.status-cancelled {
    background: #d1ecf1;
    color: #0c5460;
  }
}

.actions {
  .btn {
    padding: 6px 12px;
    font-size: 12px;

    &.btn-info {
      background: #17a2b8;
      border-color: #17a2b8;
      color: white;

      &:hover {
        background: #138496;
        border-color: #117a8b;
      }
    }
  }
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 15px 0;
  border-top: 1px solid #e9ecef;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 10px;

  .btn {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background: white;
    color: #495057;
    border-radius: 4px;

    &:hover:not(:disabled) {
      background: #f8f9fa;
      border-color: #007bff;
      color: #007bff;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

.page-info {
  font-weight: 500;
  color: #495057;
}

.page-size-selector {
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    font-size: 14px;
    color: #495057;
  }

  select {
    padding: 6px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
  }
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #6c757d;

  i {
    margin-bottom: 20px;
    opacity: 0.5;
  }

  h3 {
    margin-bottom: 10px;
    color: #495057;
  }

  p {
    margin: 0;
  }
}

@media (max-width: 768px) {
  .search-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .search-group {
    min-width: auto;
  }

  .filter-group {
    justify-content: space-between;
  }

  .summary-info {
    justify-content: space-between;
  }

  .sort-options {
    flex-wrap: wrap;
  }

  .pagination-container {
    flex-direction: column;
    gap: 15px;
  }

  .animals-table {
    font-size: 14px;

    th,
    td {
      padding: 8px 6px;
    }
  }
}
</style>
