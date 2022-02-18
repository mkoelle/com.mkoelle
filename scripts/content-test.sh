#!/usr/bin/env bash
set +x #xtrace OFF
set +v #verbose
set -e #errexit
set -u #nounset

# Set env vars here, before turning on xtrace

set -x #xtrace ON

npm run lint
npm run test
