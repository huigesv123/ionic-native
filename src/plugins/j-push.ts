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
  device: JPush
};

/**
 * @name EasyLink
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { EasyLink } from 'ionic-native';
 *
 * EasyLink.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  plugin: 'jpush-phonegap-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'JPush', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  platforms: ['Android', 'iOS']
})
export class JPush {


  @Cordova()
  static init(): Promise<any> {
    return;
  }

  @Cordova()
  static stopPush(): Promise<any> {
    return;
  }

  @Cordova()
  static resumePush(): Promise<any> {
    return;
  }

  @Cordova()
  static setAlias(alias: string): Promise<any> {
    return;
  }

  @Cordova()
  static setApplicationIconBadgeNumber(badge: number): Promise<any> {
    return;
  }
}
