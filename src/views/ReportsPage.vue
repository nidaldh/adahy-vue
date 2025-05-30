<template>
  <div class="reports-page" dir="rtl">
    <h2><i class="fas fa-chart-pie"></i> التقارير</h2>
    <div class="report-section">
      <balance-sheet-table />
    </div>
    <!-- Add more report components or sections here -->
    <div class="report-section placeholder-section">
      <h3><i class="fas fa-file-alt"></i> تقارير إضافية (قيد التطوير)</h3>
      <p>سيتم إضافة المزيد من التقارير التفصيلية هنا، مثل:</p>
      <ul>
        <li>تقرير مبيعات حسب نوع الأضحية.</li>
        <li>تقرير العملاء الأكثر نشاطاً.</li>
        <li>ملخص الأرباح والخسائر (يتطلب إدخال التكاليف).</li>
        <li>تقرير حالة الأضاحي (محجوز، مذبوح، الخ).</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import BalanceSheetTable from '@/components/balance/BalanceSheetTable.vue';
// Import other report components as they are created
// import SalesSummaryReport from '@/components/reports/SalesSummaryReport.vue';
// import TopCustomersReport from '@/components/reports/TopCustomersReport.vue';
</script>

<style scoped lang="scss">
.reports-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    i { margin-left: 10px; }
  }

  .report-section {
    margin-bottom: 30px;
    // Card styling will be applied by BalanceSheetTable itself if it has .card-style
    // If not, uncomment below:
    /*
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    */

    &.placeholder-section {
      padding: 25px;
      background-color: #f9f9f9;
      border: 1px dashed #ddd;
      border-radius: 8px;
      color: #555;
      h3 {
        color: var(--app-primary-color, #007bff);
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        margin-top: 0;
        margin-bottom: 15px;
        i { margin-left: 8px; }
      }
      ul {
        list-style-type: "✓ "; // Unicode checkmark or FontAwesome icon
        padding-right: 20px; // RTL
        li {
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
