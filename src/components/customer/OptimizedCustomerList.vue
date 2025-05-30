<template>
  <div class="optimized-customer-list" dir="rtl">
    <div class="list-header">
      <h3><i class="fas fa-users"></i> قائمة العملاء (محسّنة)</h3>
      <div class="performance-stats" v-if="showPerformanceStats">
        <span class="stat">العناصر: {{ items.length }}</span>
        <span class="stat">المعروض: {{ virtualItems.length }}</span>
        <span class="stat">الوضع: {{ isVirtualized ? 'مُحسن' : 'عادي' }}</span>
      </div>
    </div>
    
    <!-- Standard rendering for small lists -->
    <div v-if="!isVirtualized" class="standard-list">
      <customer-card
        v-for="customer in items"
        :key="customer.id"
        :customer="customer"
        @editCustomer="$emit('editCustomer', $event)"
        @viewPayments="$emit('viewPayments', $event)"
        @deleteCustomer="$emit('deleteCustomer', $event)"
      />
    </div>
    
    <!-- Virtual scrolling for large lists -->
    <div 
      v-else
      ref="parentRef"
      class="virtual-list-container"
      :style="{ height: `${containerHeight}px`, overflow: 'auto' }"
    >
      <div :style="{ height: `${totalSize}px`, position: 'relative' }">
        <div
          v-for="virtualItem in virtualItems"
          :key="String(virtualItem.key)"
          :style="{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: `translateY(${virtualItem.start}px)`
          }"
        >
          <customer-card
            :customer="items[virtualItem.index]"
            @editCustomer="$emit('editCustomer', $event)"
            @viewPayments="$emit('viewPayments', $event)"
            @deleteCustomer="$emit('deleteCustomer', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import { useVirtualScroll, usePerformantList } from '@/composables/useVirtualScroll';
import { usePerformanceMonitor } from '@/composables/usePerformanceMonitor';
import CustomerCard from './CustomerCard.vue';
import type { Customer } from '@/store/modules/customers';

interface Props {
  items: Customer[];
  containerHeight?: number;
  virtualThreshold?: number;
  showPerformanceStats?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  containerHeight: 600,
  virtualThreshold: 50,
  showPerformanceStats: false
});

defineEmits<{
  editCustomer: [customer: Customer];
  viewPayments: [customerId: string];
  deleteCustomer: [customerId: string];
}>();

// Performance monitoring
const { measureComponentMount } = usePerformanceMonitor();
const stopMeasuring = measureComponentMount('OptimizedCustomerList');

// Determine if virtualization should be used
const { shouldVirtualize } = usePerformantList(props.virtualThreshold);
const isVirtualized = computed(() => shouldVirtualize(props.items));

// Virtual scrolling setup
const estimateSize = () => 280; // Estimated height of CustomerCard
const { parentRef, virtualItems, totalSize } = useVirtualScroll(
  computed(() => props.items),
  estimateSize,
  5 // overscan
);

// Cleanup performance measurement
onUnmounted(() => {
  stopMeasuring();
});
</script>

<style scoped lang="scss">
.optimized-customer-list {
  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
    h3 {
      margin: 0;
      color: #333;
      i { margin-left: 8px; }
    }
    
    .performance-stats {
      display: flex;
      gap: 15px;
      font-size: 0.85em;
      color: #666;
      
      .stat {
        padding: 4px 8px;
        background: #f8f9fa;
        border-radius: 4px;
        border: 1px solid #e9ecef;
      }
    }
  }
  
  .standard-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  }
  
  .virtual-list-container {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #fafafa;
  }
}
</style>
