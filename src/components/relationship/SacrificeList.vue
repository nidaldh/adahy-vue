<template>
  <div class="sacrifice-list" dir="rtl">
    <div class="list-header">
      <h4>
        <i class="fas fa-list-ul"></i>
        أضاحي العميل
        <span class="count-badge">{{ sacrifices.length }}</span>
      </h4>
    
    </div>
    
    <!-- Empty State -->
    <div v-if="sacrifices.length === 0" class="empty-state">
      <div class="empty-content">
        <i class="fas fa-sheep fa-2x"></i>
        <h5>لا توجد أضاحي مسجلة</h5>
        <p>استخدم النموذج أعلاه لإضافة أضاحي جديدة للعميل</p>
      </div>
    </div>
    
    <!-- Sacrifices List -->
    <div v-else class="sacrifices-container">
      <div 
        v-for="sacrifice in sacrifices" 
        :key="sacrifice.id"
        class="sacrifice-card"
        :class="{ 
          'selected': selectedSacrifices.includes(sacrifice.id),
          'highlighted': sacrifice.id === highlightAnimalId
        }"
        :id="`sacrifice-card-${sacrifice.id}`"
        ref="sacrificeCards"
      >
        <!-- Selection Checkbox -->
        <div class="sacrifice-selection">
          <input 
            type="checkbox" 
            :id="`sacrifice-${sacrifice.id}`"
            :checked="selectedSacrifices.includes(sacrifice.id)"
            @change="toggleSacrificeSelection(sacrifice.id)"
            class="sacrifice-checkbox"
          />
        </div>
        
        <!-- Sacrifice Info -->
        <div class="sacrifice-info">
          <div class="sacrifice-header">
            <div class="sacrifice-title">
              <h5>
                <i class="fas fa-paw"></i>
                {{ sacrifice.type }} - {{ sacrifice.number }}
              </h5>
              <span class="composite-key">{{ sacrifice.compositeKey }}</span>
            </div>
            
            <div class="sacrifice-status">
              <select 
                :value="sacrifice.status"
                @change="updateStatus(sacrifice.id, ($event.target as HTMLSelectElement).value)"
                class="status-select"
                :class="getStatusClass(sacrifice.status)"
              >
                <option value="حي">حي</option>
                <option value="جاهز">جاهز</option>
                <option value="مذبوح">مذبوح</option>
                <option value="ملغي" :disabled="sacrifice.status !== 'حي'">ملغي</option>
              </select>
            </div>
          </div>
          
          <div class="sacrifice-details">
            <div class="detail-item">
              <i class="fas fa-tag"></i>
              <span class="detail-label">رقم الأضحية:</span>
              <span class="detail-value">{{ sacrifice.number }}</span>
            </div>
            
            <div class="detail-item">
              <i class="fas fa-weight-hanging"></i>
              <span class="detail-label">الوزن:</span>
              <span class="detail-value">{{ sacrifice.weight }} كجم</span>
            </div>
            
            <div class="detail-item">
              <i class="fas fa-money-bill-wave"></i>
              <span class="detail-label">سعر الكيلو:</span>
              <span class="detail-value">{{ formatCurrency(sacrifice.pricePerUnit) }}</span>
            </div>
            
            <div class="detail-item total">
              <i class="fas fa-calculator"></i>
              <span class="detail-label">المجموع:</span>
              <span class="detail-value">{{ formatCurrency(sacrifice.total) }}</span>
            </div>
            
            <div v-if="sacrifice.notes" class="detail-item notes">
              <i class="fas fa-sticky-note"></i>
              <span class="detail-label">ملاحظات:</span>
              <span class="detail-value notes-text">{{ sacrifice.notes }}</span>
            </div>
          </div>
        </div>
        
        <!-- Actions -->
        <div class="sacrifice-actions">
          <button 
            @click="requestEdit(sacrifice)" 
            class="action-btn edit-btn"
            title="تعديل الأضحية"
          >
            <i class="fas fa-pencil-alt"></i>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Summary Section -->
    <div v-if="sacrifices.length > 0" class="summary-section">
      <div class="summary-card">
        <div class="summary-item">
          <i class="fas fa-sheep"></i>
          <span class="summary-label">إجمالي الأضاحي:</span>
          <span class="summary-value">{{ sacrifices.length }} رأس</span>
        </div>
        
        <div class="summary-item">
          <i class="fas fa-weight-hanging"></i>
          <span class="summary-label">إجمالي الوزن:</span>
          <span class="summary-value">{{ totalWeight }} كجم</span>
        </div>
        
        <div class="summary-item total-amount">
          <i class="fas fa-money-bill-wave"></i>
          <span class="summary-label">إجمالي المبلغ:</span>
          <span class="summary-value">{{ formatCurrency(totalAmount) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import type { Animal } from '@/store/modules/customers';

const props = defineProps<{
  sacrifices: Animal[];
  highlightAnimalId?: string | null;
}>();

const emit = defineEmits<{
  'update-status': [id: string, status: string];
  'request-edit-animal': [animal: Animal];
}>();

// Selection state
const selectedSacrifices = ref<string[]>([]);
const sacrificeCards = ref<HTMLElement[]>([]);

// Computed properties
const totalWeight = computed(() => {
  return props.sacrifices.reduce((sum, sacrifice) => sum + (sacrifice.weight || 0), 0).toFixed(1);
});

const totalAmount = computed(() => {
  return props.sacrifices.reduce((sum, sacrifice) => sum + (sacrifice.total || 0), 0);
});

// Scroll to highlighted animal
const scrollToHighlightedAnimal = () => {
  if (props.highlightAnimalId) {
    nextTick(() => {
      const element = document.getElementById(`sacrifice-card-${props.highlightAnimalId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a temporary flash animation
        element.classList.add('flash-highlight');
        setTimeout(() => {
          element.classList.remove('flash-highlight');
        }, 3000);
      }
    });
  }
};

// Watch for changes in highlightAnimalId
watch(() => props.highlightAnimalId, (newId) => {
  if (newId) {
    scrollToHighlightedAnimal();
  }
});

// Methods
const toggleSacrificeSelection = (id: string) => {
  const index = selectedSacrifices.value.indexOf(id);
  if (index > -1) {
    selectedSacrifices.value.splice(index, 1);
  } else {
    selectedSacrifices.value.push(id);
  }
};

const updateStatus = (id: string, newStatus: string) => {
  emit('update-status', id, newStatus);
};

const requestEdit = (animal: Animal) => {
  emit('request-edit-animal', animal);
};

// Utility functions
const formatCurrency = (value: number | undefined) => {
  if (typeof value !== 'number') return 'N/A';
  return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(value);
};

const getStatusClass = (status: string) => {
  const statusClasses: Record<string, string> = {
    'حي': 'status-alive',
    'جاهز': 'status-ready',
    'مذبوح': 'status-slaughtered',
    'ملغي': 'status-cancelled'
  };
  return statusClasses[status] || '';
};

onMounted(() => {
  scrollToHighlightedAnimal();
});
</script>

<style scoped lang="scss">
.sacrifice-list {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  
  .list-header {
    background: linear-gradient(135deg, #8e44ad, #732d91);
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    
    h4 {
      margin: 0;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 10px;
      
      i {
        margin-left: 8px;
      }
      
      .count-badge {
        background: rgba(255,255,255,0.2);
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: normal;
      }
    }
    
    .list-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }
  
  .empty-state {
    padding: 40px 20px;
    text-align: center;
    
    .empty-content {
      i {
        color: #bdc3c7;
        margin-bottom: 15px;
      }
      
      h5 {
        color: #34495e;
        margin-bottom: 10px;
      }
      
      p {
        color: #7f8c8d;
        margin: 0;
      }
    }
  }
  
  .sacrifices-container {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    .sacrifice-card {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      border: 2px solid #ecf0f1;
      border-radius: 8px;
      transition: all 0.2s ease;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      margin-bottom: 15px;
      display: flex;
      overflow: hidden;
      transition: box-shadow 0.3s ease, transform 0.2s ease;
      
      &:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      
      &.selected {
        border-color: #8e44ad;
        box-shadow: 0 0 0 2px rgba(142, 68, 173, 0.2);
      }
      
      &.highlighted {
        border-color: #e74c3c;
        box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.3);
      }

      &.flash-highlight {
        animation: highlight-flash 2s ease;
      }
      
      .sacrifice-selection {
        padding: 15px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8f9fa;
        border-left: 1px solid #e0e0e0;
        
        .sacrifice-checkbox {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
      }
      
      .sacrifice-info {
        flex: 1;
        
        .sacrifice-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          
          .sacrifice-title {
            h5 {
              margin: 0 0 5px 0;
              color: #2c3e50;
              font-size: 1.1rem;
              display: flex;
              align-items: center;
              
              i {
                margin-left: 8px;
                color: #8e44ad;
              }
            }
            
            .composite-key {
              font-size: 0.8rem;
              color: #7f8c8d;
              font-family: monospace;
            }
          }
          
          .sacrifice-status {
            .status-select {
              padding: 5px 10px;
              border: none;
              border-radius: 15px;
              font-weight: bold;
              font-size: 0.85rem;
              cursor: pointer;
              
              &.status-alive { background: #d5f4e6; color: #27ae60; }
              &.status-ready { background: #fff3cd; color: #856404; }
              &.status-slaughtered { background: #f8d7da; color: #721c24; }
              &.status-cancelled { background: #e2e3e5; color: #383d41; }
            }
          }
        }
        
        .sacrifice-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
          
          .detail-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            
            i {
              color: #8e44ad;
              width: 16px;
            }
            
            .detail-label {
              color: #34495e;
              font-weight: 500;
            }
            
            .detail-value {
              color: #2c3e50;
              font-weight: bold;
            }
            
            &.total {
              .detail-value {
                color: #27ae60;
                font-size: 1rem;
              }
            }
            
            &.notes {
              grid-column: 1 / -1;
              
              .notes-text {
                background: #f8f9fa;
                padding: 8px 12px;
                border-radius: 6px;
                border: 1px solid #e0e0e0;
                flex: 1;
                font-style: italic;
                color: #555;
                word-break: break-word;
              }
            }
          }
        }
      }
      
      .sacrifice-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
        
        .action-btn {
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          
          &.edit-btn {
            background: #e8f4fd;
            color: #2980b9;
            border: 2px solid #3498db;
            font-weight: 600;
            
            &:hover {
              background: #3498db;
              color: white;
              border-color: #2980b9;
            }
          }
          
          &.remove-btn {
            background: #fdeaea;
            color: #c0392b;
            border: 2px solid #e74c3c;
            font-weight: 600;
            
            &:hover {
              background: #e74c3c;
              color: white;
              border-color: #c0392b;
            }
          }
        }
      }
    }
  }
  
  .summary-section {
    border-top: 2px solid #ecf0f1;
    padding: 20px;
    background: #f8f9fa;
    
    .summary-card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      
      .summary-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 15px;
        background: white;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        
        i {
          color: #8e44ad;
          font-size: 1.2rem;
        }
        
        .summary-label {
          color: #34495e;
          font-weight: 500;
        }
        
        .summary-value {
          margin-right: auto;
          font-weight: bold;
          color: #2c3e50;
        }
        
        &.total-amount {
          .summary-value {
            color: #27ae60;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  
  &.btn-sm {
    padding: 4px 8px;
    font-size: 0.8rem;
  }
  
  &.btn-outline {
    background: rgba(255,255,255,0.9);
    color: #8e44ad;
    border: 2px solid rgba(255,255,255,0.8);
    font-weight: 600;
    
    &:hover {
      background: rgba(255,255,255,1);
      color: #732d91;
      border-color: rgba(255,255,255,1);
    }
  }
  
  &.btn-primary {
    background: rgba(255,255,255,0.9);
    color: #8e44ad;
    border: 2px solid rgba(255,255,255,0.8);
    font-weight: 600;
    
    &:hover {
      background: rgba(255,255,255,1);
      color: #732d91;
      border-color: rgba(255,255,255,1);
    }
  }
}

@media (max-width: 768px) {
  .sacrifice-list {
    .list-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .sacrifices-container {
      .sacrifice-card {
        flex-direction: column;
        align-items: flex-start;
        
        .sacrifice-actions {
          flex-direction: row;
          align-self: flex-end;
        }
      }
    }
    
    .summary-section {
      .summary-card {
        grid-template-columns: 1fr;
      }
    }
  }
}

@keyframes highlight-flash {
  0% {
    background-color: rgba(231, 76, 60, 0.2);
  }
  30% {
    background-color: rgba(231, 76, 60, 0.4);
  }
  100% {
    background-color: transparent;
  }
}
</style>
