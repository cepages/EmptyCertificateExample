import { WebPlugin } from '@capacitor/core';
import { EmptyCertificateExamplePlugin } from './definitions';

export class EmptyCertificateExampleWeb extends WebPlugin implements EmptyCertificateExamplePlugin {
  constructor() {
    super({
      name: 'EmptyCertificateExample',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const EmptyCertificateExample = new EmptyCertificateExampleWeb();

export { EmptyCertificateExample };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(EmptyCertificateExample);
