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

declare var window: {
  device: CordovaHttp
};
/**
 * @name CordovaHttp
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { CordovaHttp } from 'ionic-native';
 *
 * CordovaHttp.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-http', // npm package name, example: cordova-plugin-camera
  pluginRef: 'CordovaHttpPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  platforms: ['Android', 'iOS']
})
export class CordovaHttp {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static getBasicAuthHeader(username: string, password: string) {

  }

  @Cordova()
  static useBasicAuth(username: string, password: string) {

  }

  @Cordova()
  static setHeader(header: any, value: any) {

  }

  @Cordova()
  static enableSSLPinning(enable: boolean, success: any, failure: any) {

  }

  @Cordova()
  static acceptAllCerts(allow: boolean, success: any, failure: any) {

  }

  @Cordova()
  static validateDomainName(validate: boolean, success: any, failure: any) {

  }

  @Cordova()
  static post(url: string, params: any, headers: any): Promise<any> {
    return;
  }

  @Cordova()
  static get(url: string, params: any, headers: any, success: any, failure: any) {

  }

  @Cordova()
  static head(url: string, params: any, headers: any, success: any, failure: any) {

  }


}
