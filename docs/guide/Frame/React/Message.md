```ts
import { cloneDeep } from 'lodash-es';
import { toast as toastify } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';

// https://fkhadra.github.io/react-toastify/introduction/
class Message {
  private defaultConfig: ToastOptions;
  constructor() {
    this.defaultConfig = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
      style: {
        fontSize: '14px',
        fontWeight: 'normal',
      },
    };
  }

  public info(text: string, config?: ToastOptions) {
    const options = cloneDeep({ ...this.defaultConfig, ...config });
    options.type = 'info';
    toastify(text, options);
  }

  public warning(text: string, config?: ToastOptions) {
    const options = cloneDeep({ ...this.defaultConfig, ...config });
    options.type = 'warning';
    options.theme = 'colored';
    toastify(text, options);
  }

  public success(text: string, config?: ToastOptions) {
    const options = cloneDeep({ ...this.defaultConfig, ...config });
    options.type = 'success';
    options.theme = 'colored';
    toastify(text, options);
  }

  public error(text: string, config?: ToastOptions) {
    const options = cloneDeep({ ...this.defaultConfig, ...config });
    options.type = 'error';
    options.theme = 'colored';
    toastify(text, options);
  }
}

export const message = new Message();
```
