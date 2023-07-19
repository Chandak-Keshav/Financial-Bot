import React, { useEffect } from 'react';

const ChartComponent = () => {
  useEffect(() => {
    const loadTradingView = () => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;

      script.onload = () => {
        createTradingViewWidget();
      };

      document.body.appendChild(script);
    };

    const createTradingViewWidget = () => {
      new window.TradingView.widget({
        container_id: 'technical-analysis-chart-demo',
        width: 800,
        height: 410,
        // autosize: true,
        symbol: 'AAPL',
        interval: 'D',
        timezone: 'exchange',
        theme: 'light',
        style: '1',
        toolbar_bg: '#f1f3f6',
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        save_image: false,
        studies: [
          'ROC@tv-basicstudies',
          'StochasticRSI@tv-basicstudies',
          'MASimple@tv-basicstudies',
          'STD;SMA'
        ],
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650',
        locale: 'in'
      });
    };

    loadTradingView();

    return () => {
      const script = document.querySelector('script[src="https://s3.tradingview.com/tv.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="technical-analysis-chart-demo"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://in.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default ChartComponent;
