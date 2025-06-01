<template>
  <div class="customer-selector" dir="rtl">
    <div class="selector-header">
      <h3><i class="fas fa-users"></i> اختيار العميل</h3>
    </div>
    
    <div class="selector-content">
      <!-- Search Input -->
      <div class="search-container">
        <div class="search-input-wrapper">
          <i class="fas fa-search search-icon"></i>
          <input
            ref="searchInput"
            type="text"
            v-model="searchTerm"
            placeholder="ابحث عن العميل بالاسم أو رقم الهاتف..."
            class="search-input"
            @input="onSearchInput"
            @focus="showDropdown = true"
            @keydown="handleKeyNavigation"
          />
          <button 
            v-if="selectedCustomer" 
            @click="clearSelection"
            class="clear-btn"
            type="button"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <!-- Dropdown with customers -->
        <div v-if="showDropdown && filteredCustomers.length > 0" class="customers-dropdown">
          <div
            v-for="(customer, index) in filteredCustomers"
            :key="customer.id"
            :class="['customer-option', { active: index === activeIndex }]"
            @click="selectCustomer(customer)"
            @mouseenter="activeIndex = index"
          >
            <div class="customer-info">
              <div class="customer-name">
                <i class="fas fa-user"></i>
                {{ customer.name }}
              </div>
              <div class="customer-details">
                <span v-if="customer.phone" class="phone">
                  <i class="fas fa-phone"></i>
                  {{ customer.phone }}
                </span>
                <span class="animals-count">
                  <i class="fas fa-sheep"></i>
                  {{ customer.animals?.length || 0 }} أضحية
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- No results message -->
        <div v-if="showDropdown && searchTerm && filteredCustomers.length === 0" class="no-results">
          <i class="fas fa-search"></i>
          لا توجد نتائج للبحث "{{ searchTerm }}"
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { useCustomersStore } from '@/store/modules/customers';
import type { Customer } from '@/store/modules/customers';

const props = defineProps<{
  selectedCustomer: Customer | null;
}>();

const emit = defineEmits<{
  'customer-selected': [customer: Customer];
  'customer-cleared': [];
}>();

const customersStore = useCustomersStore();
const searchTerm = ref('');
const showDropdown = ref(false);
const activeIndex = ref(-1);
const searchInput = ref<HTMLInputElement | null>(null);

// Load customers on mount
onMounted(() => {
  customersStore.fetchCustomers();
});

// Computed properties
const filteredCustomers = computed(() => {
  if (!searchTerm.value.trim()) {
    return customersStore.customers.slice(0, 10); // Show first 10 customers
  }
  
  const term = searchTerm.value.toLowerCase();
  return customersStore.customers.filter(customer => 
    customer.name.toLowerCase().includes(term) ||
    customer.phone?.toLowerCase().includes(term)
  ).slice(0, 10); // Limit results
});

// Methods
const onSearchInput = () => {
  showDropdown.value = true;
  activeIndex.value = -1;
};

const selectCustomer = (customer: Customer) => {
  searchTerm.value = customer.name;
  showDropdown.value = false;
  activeIndex.value = -1;
  emit('customer-selected', customer);
};

const clearSelection = () => {
  searchTerm.value = '';
  showDropdown.value = false;
  activeIndex.value = -1;
  emit('customer-cleared');
  nextTick(() => {
    searchInput.value?.focus();
  });
};

const handleKeyNavigation = (event: KeyboardEvent) => {
  if (!showDropdown.value || filteredCustomers.value.length === 0) return;
  
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      activeIndex.value = Math.min(activeIndex.value + 1, filteredCustomers.value.length - 1);
      break;
    case 'ArrowUp':
      event.preventDefault();
      activeIndex.value = Math.max(activeIndex.value - 1, -1);
      break;
    case 'Enter':
      event.preventDefault();
      if (activeIndex.value >= 0) {
        selectCustomer(filteredCustomers.value[activeIndex.value]);
      }
      break;
    case 'Escape':
      showDropdown.value = false;
      activeIndex.value = -1;
      break;
  }
};

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.customer-selector')) {
    showDropdown.value = false;
    activeIndex.value = -1;
  }
};

// Watch for selected customer changes from parent
watch(() => props.selectedCustomer, (newCustomer) => {
  if (newCustomer) {
    searchTerm.value = newCustomer.name;
    showDropdown.value = false;
  } else {
    searchTerm.value = '';
  }
}, { immediate: true });

// Utility functions
const formatCurrency = (value: number | undefined) => {
  if (typeof value !== 'number') return 'N/A';
  return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(value);
};

const getBalanceClass = (balance: number | undefined) => {
  if (typeof balance !== 'number') return '';
  if (balance > 0) return 'text-danger';
  if (balance < 0) return 'text-info';
  return 'text-success';
};

// Add event listener for click outside
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// Cleanup
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped lang="scss">
.customer-selector {
  .selector-header {
    margin-bottom: 20px;
    
    h3 {
      color: #2c3e50;
      margin: 0;
      font-size: 1.3rem;
      
      i {
        margin-left: 10px;
        color: #3498db;
      }
    }
  }
  
  .selector-content {
    .search-container {
      position: relative;
      margin-bottom: 20px;
      
      .search-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        
        .search-icon {
          position: absolute;
          right: 15px;
          color: #7f8c8d;
          z-index: 2;
        }
        
        .search-input {
          width: 100%;
          padding: 12px 45px 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          
          &:focus {
            outline: none;
            border-color: #3498db;
          }
          
          &::placeholder {
            color: #bdc3c7;
          }
        }
        
        .clear-btn {
          position: absolute;
          left: 10px;
          background: none;
          border: none;
          color: #e74c3c;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          
          &:hover {
            background-color: #f8f9fa;
          }
        }
      }
      
      .customers-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-height: 300px;
        overflow-y: auto;
        z-index: 1000;
        
        .customer-option {
          padding: 12px 15px;
          cursor: pointer;
          border-bottom: 1px solid #f8f9fa;
          transition: background-color 0.2s ease;
          
          &:hover,
          &.active {
            background-color: #f8f9fa;
          }
          
          &:last-child {
            border-bottom: none;
          }
          
          .customer-info {
            .customer-name {
              font-weight: 500;
              color: #2c3e50;
              margin-bottom: 5px;
              
              i {
                margin-left: 8px;
                color: #3498db;
              }
            }
            
            .customer-details {
              display: flex;
              gap: 15px;
              font-size: 0.9rem;
              color: #7f8c8d;
              
              span {
                display: flex;
                align-items: center;
                gap: 5px;
                
                i {
                  font-size: 0.8rem;
                }
              }
            }
          }
        }
      }
      
      .no-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        padding: 20px;
        text-align: center;
        color: #7f8c8d;
        z-index: 1000;
        
        i {
          margin-left: 10px;
        }
      }
    }
    
    .selected-customer-display {
      .selected-customer-card {
        border: 2px solid #27ae60;
        border-radius: 10px;
        padding: 20px;
        background: linear-gradient(145deg, #f8fff9, #ffffff);
        
        .customer-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
          
          .customer-main-info {
            h4 {
              color: #27ae60;
              margin: 0 0 5px 0;
              font-size: 1.2rem;
              
              i {
                margin-left: 10px;
              }
            }
            
            .phone {
              color: #7f8c8d;
              margin: 0;
              
              i {
                margin-left: 5px;
              }
            }
          }
          
          .change-customer-btn {
            background: #ecf0f1;
            border: none;
            padding: 8px 12px;
            border-radius: 6px;
            color: #2c3e50;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background-color 0.2s ease;
            
            &:hover {
              background: #d5dbdb;
            }
            
            i {
              margin-left: 8px;
            }
          }
        }
        
        .customer-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          
          .stat-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px;
            background: rgba(255,255,255,0.7);
            border-radius: 6px;
            border: 1px solid #e8f5e8;
            
            i {
              color: #27ae60;
              font-size: 1.1rem;
            }
            
            .stat-label {
              color: #34495e;
              font-weight: 500;
            }
            
            .stat-value {
              font-weight: bold;
              margin-right: auto;
              
              &.text-danger { color: #e74c3c; }
              &.text-success { color: #27ae60; }
              &.text-info { color: #3498db; }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .customer-selector {
    .selected-customer-display {
      .selected-customer-card {
        .customer-header {
          flex-direction: column;
          gap: 15px;
          
          .change-customer-btn {
            align-self: flex-start;
          }
        }
        
        .customer-stats {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>
