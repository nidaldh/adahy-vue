<template>
  <div v-if="isVisible" class="confirm-dialog-overlay" @click="handleOverlayClick">
    <div class="confirm-dialog" @click.stop>
      <div class="dialog-header">
        <h3>
          <i :class="iconClass"></i>
          {{ title }}
        </h3>
      </div>
      <div class="dialog-body">
        <p>{{ message }}</p>
      </div>
      <div class="dialog-actions">
        <button 
          @click="handleCancel" 
          class="btn btn-secondary"
          :disabled="loading"
        >
          {{ cancelText }}
        </button>
        <button 
          @click="handleConfirm" 
          :class="confirmButtonClass"
          :disabled="loading"
        >
          <i v-if="loading" class="fas fa-spinner fa-spin"></i>
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'تأكيد العملية'
  },
  message: {
    type: String,
    required: true
  },
  confirmText: {
    type: String,
    default: 'تأكيد'
  },
  cancelText: {
    type: String,
    default: 'إلغاء'
  },
  type: {
    type: String as () => 'danger' | 'warning' | 'info',
    default: 'warning'
  },
  loading: {
    type: Boolean,
    default: false
  },
  closeOnOverlayClick: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['confirm', 'cancel', 'close']);

const iconClass = computed(() => {
  switch (props.type) {
    case 'danger':
      return 'fas fa-exclamation-triangle text-danger';
    case 'warning':
      return 'fas fa-exclamation-circle text-warning';
    case 'info':
    default:
      return 'fas fa-info-circle text-info';
  }
});

const confirmButtonClass = computed(() => {
  const baseClass = 'btn';
  switch (props.type) {
    case 'danger':
      return `${baseClass} btn-danger`;
    case 'warning':
      return `${baseClass} btn-warning`;
    case 'info':
    default:
      return `${baseClass} btn-primary`;
  }
});

const handleConfirm = () => {
  if (!props.loading) {
    emit('confirm');
  }
};

const handleCancel = () => {
  if (!props.loading) {
    emit('cancel');
  }
};

const handleOverlayClick = () => {
  if (props.closeOnOverlayClick && !props.loading) {
    emit('close');
  }
};
</script>

<style scoped lang="scss">
.confirm-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.confirm-dialog {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow: auto;
  direction: rtl;
}

.dialog-header {
  padding: 20px 20px 0;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0 0 20px;
    font-size: 1.2rem;
    color: #333;
    
    i {
      margin-left: 8px;
      
      &.text-danger { color: #dc3545; }
      &.text-warning { color: #ffc107; }
      &.text-info { color: #17a2b8; }
    }
  }
}

.dialog-body {
  padding: 20px;
  
  p {
    margin: 0;
    color: #666;
    line-height: 1.5;
  }
}

.dialog-actions {
  padding: 0 20px 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &.btn-primary {
    background-color: #007bff;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  }
  
  &.btn-secondary {
    background-color: #6c757d;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #545b62;
    }
  }
  
  &.btn-danger {
    background-color: #dc3545;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #c82333;
    }
  }
  
  &.btn-warning {
    background-color: #ffc107;
    color: #212529;
    
    &:hover:not(:disabled) {
      background-color: #e0a800;
    }
  }
}
</style>
