import {getInput} from '@actions/core'
import {getOctokit} from '@actions/github'

export class Input {
  get owner(): string {
    return getInput('respository').split('/')[0]
  }

  get repo(): string {
    return getInput('repository').split('/')[1]
  }

  get excludes(): ('draft' | 'prerelease')[] {
    const input = getInput('excludes')
    return input === '' ? [] : (input.split(',') as ('draft' | 'prerelease')[])
  }

  get github(): ReturnType<typeof getOctokit> {
    return getOctokit(getInput('token'))
  }
}
