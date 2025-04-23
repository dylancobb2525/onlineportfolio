// This file initializes Vercel Speed Insights for analytics
import { SpeedInsights } from "@vercel/speed-insights";

// Initialize Speed Insights
document.addEventListener('DOMContentLoaded', function() {
  const speedInsights = new SpeedInsights();
});

// Export for use in HTML
window.SpeedInsights = SpeedInsights; 