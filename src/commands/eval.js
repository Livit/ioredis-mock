import createCommand from '../command';
import { customCommand } from './defineCommand';
import sha1 from '../commands-utils/sha1';

export function evaluate(script, numberOfKeys, ...args) {
  // store sha1 and the script  itself for `evalsha` function
  const scriptSha = sha1(script);
  this.shaScripts[scriptSha] = script
  // evaluate
  return createCommand(
    customCommand(numberOfKeys, script).bind(this),
    '',
    this
  )(...args);
}
