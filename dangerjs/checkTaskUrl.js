const { getRandomImage } = require('./data/helpers')

const urlError = [
  '**The JIRA-ticket has not been filled out**\n\n',
  'In case, there is no JIRA-ticket, please replace the example URL by \`n/a\`\n\n',
  `![img](${getRandomImage('noJiraTicket')}, 'Oops')\n`
]

function checkTaskURL({ body = '' }) {
  const storyUrlRegex = /(https:\/\/capmo-team.atlassian.net\/browse\/)(PD|pd|IES|ies|QA|qa)-\d+/g
  const doesNotHaveUrl = !!body.includes(
    'https://capmo-team.atlassian.net/browse/'
  )

  const bodyUrlIsNotComplete = !(body.match(storyUrlRegex) !== null)

  if (doesNotHaveUrl && bodyUrlIsNotComplete) {
    return urlError.join('')
  }
}

module.exports = {
  checkTaskURL
}
