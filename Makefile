setup-8:
	if [ -f .eslintrc.8.json ]; then mv .eslintrc.8.json .eslintrc.json; fi; \
	if [ -f eslint.config.js ]; then mv eslint.config.js eslint.config.9.js; fi

setup-9:
	if [ -f .eslintrc.json ]; then mv .eslintrc.json .eslintrc.8.json; fi; \
	if [ -f eslint.config.9.js ]; then mv eslint.config.9.js eslint.config.js; fi
