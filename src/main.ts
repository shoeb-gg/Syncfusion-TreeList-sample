import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  'Mgo+DSMBaFt/QHRqVVhkX1pGaVZdX2NLfUNyT2FYdVt4ZDU7a15RRnVfQ1xjSHlXcERhWHpWdg==;Mgo+DSMBPh8sVXJ0S0J+XE9AdVRAQmpWfFN0RnNddVxxflBOcDwsT3RfQF5jSH9Td0JnX35ccXNRQA==;ORg4AjUWIQA/Gnt2VVhkQlFaclxJX3xAYVF2R2BJe1RydV9DaEwxOX1dQl9gSX9SdkRkXXlfcnVdT2Y=;OTE1MTkxQDMyMzAyZTM0MmUzMFZ6NXlLT0FJZVNoVkt0WFZ2dkpqSnBjZkVjWlVUUGNSMER4Wm9PQUkrTkk9;OTE1MTkyQDMyMzAyZTM0MmUzMFl6aGtrNk12M3ZzcUZxYmVPVG5SdXF6NjBtNktUODdsVUx4NE5ZRVJYWTQ9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtBVmFWd0x0RWFab1p6dlRMZVRBJAtUQF1hSn5Sd0ViXntYcXZXQ2Fa;OTE1MTk0QDMyMzAyZTM0MmUzMGNiUDBwTE5NN3FCMkVxMlBaR0p5VU40TDQ3WWlrMTF2SmxvZlphajUraFE9;OTE1MTk1QDMyMzAyZTM0MmUzMENmbWpKb0VCYktMOVQ4RXFwc1lON21BRlRkZUF4b2pha3VNbWpmMXdieGM9;Mgo+DSMBMAY9C3t2VVhkQlFaclxJX3xAYVF2R2BJe1RydV9DaEwxOX1dQl9gSX9SdkRkXXlfcndUQmY=;OTE1MTk3QDMyMzAyZTM0MmUzMGZNTW53RU1DeEhha01QZGU0MHFZSDBxTFZtcXFjTnNGWDI3bDFmd1JGOHM9;OTE1MTk4QDMyMzAyZTM0MmUzMEdQTHFXSjlVbzh2SHN2SVJIK2dNQW1rTjJUdEFtUkRrdzhpZWR0aUprbUE9;OTE1MTk5QDMyMzAyZTM0MmUzMGNiUDBwTE5NN3FCMkVxMlBaR0p5VU40TDQ3WWlrMTF2SmxvZlphajUraFE9'
);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
