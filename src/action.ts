import type {Input} from './input'
import type {Output} from './output'

export const action = async (input: Input, output: Output): Promise<void> => {
  const {data} = await input.github.rest.repos.listReleases({
    owner: input.owner,
    repo: input.repo
  })

  const releases = data.filter(release =>
    input.excludes.some(exclude => !release[exclude])
  )

  if (releases.length === 0) {
    throw new Error('No releases found')
  }

  const latest = releases[0]

  output.set('id', latest.id)
  output.set('release', latest.tag_name)
  output.set('version', latest.tag_name.replace(/^v/, ''))
}
