# {{ cookiecutter.project_name }}

[![{{cookiecutter.project_slug}}-Automation](https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}/workflows/{{cookiecutter.project_slug}}-Automation/badge.svg)](https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}/actions)

## Development Dependencies

You'll need to install:

- node.js
- python2 is required for fswatch compilation

## Reference for npm commands

### Standard Commands

- `npm start`
- `npm build`
- `npm test`

### Additional Commands

- `npm run lint`
  - (Run eslint on the source files.)
- `npm run clean`
  - (Auto correct style and linting problems.)
- `npm cun coverage`
  - (Run jest unittests with coverage report.)
