import {setFailed, setOutput} from '@actions/core'

export class Output {
  failed(message: string | Error): void {
    setFailed(message)
  }
  set(key: 'id' | 'release' | 'version', value: unknown): void {
    setOutput(key, value)
  }
}
