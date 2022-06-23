import { Workbox } from "workbox-window";

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
     const wb = new Workbox('service-worker.js');
     wb.installing;
        console.log('Service worker installing');
      wb.waiting;
        console.log('Service worker installed');
      wb.active;
        console.log('Service worker active');
    
     wb.register();
            
  }

};
 
export default swRegister;