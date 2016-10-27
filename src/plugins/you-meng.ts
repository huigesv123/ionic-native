/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';
// import { Observable } from 'rxjs/Observable';

declare var window: {
  device: YouMeng
};

/**
 * @name SSLSocket
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { SSLSocket } from 'ionic-native';
 *
 * SSLSocket.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  plugin: 'com.vanward.youmeng', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.plugins.youmeng', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  platforms: ['Android', 'iOS']
})
export class YouMeng {

  @Cordova()
  static resume(): Promise<any> {
    return;
  }

  @Cordova()
  static pause(): Promise<any> {
    return;
  }

  @Cordova()
  static signin(provider: string, account: string): Promise<any> {
    return;
  }

  @Cordova()
  static signoff(): Promise<any> {
    return;
  }

  @Cordova()
  static reportError(error: string): Promise<any> {
    return;
  }

  @Cordova()
  static clearWebCache(): Promise<any> {
    return;
  }


}
