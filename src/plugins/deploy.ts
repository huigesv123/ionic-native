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
  device: Deploy
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
  plugin: 'ionic-plugin-deploy', // npm package name, example: cordova-plugin-camera
  pluginRef: 'IonicDeploy', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  platforms: ['Android', 'iOS']
})
export class Deploy {

  @Cordova()
  static init(app_id: string, server_host: string): Promise<any> {
    return;
  }

  @Cordova()
  static check(app_id: string, channel_tag: string): Promise<any> {
    return;
  }

  @Cordova()
  static download(app_id: string): Promise<any> {
    return;
  }

  @Cordova()
  static extract(app_id: string): Promise<any> {
    return;
  }

  @Cordova()
  static redirect(app_id: string): Promise<any> {
    return;
  }

  @Cordova()
  static info(app_id: string): Promise<any> {
    return;
  }

  @Cordova()
  static getVersions(app_id: string): Promise<any> {
    return;
  }

  @Cordova()
  static deleteVersion(app_id: string, version: string): Promise<any> {
    return;
  }

  @Cordova()
  static getMetadata(app_id: string, uuid: string): Promise<any> {
    return;
  }

}
