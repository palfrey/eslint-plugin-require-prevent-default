setup-8:
	if [ -f .eslintrc.8.json ]; then mv .eslintrc.8.json .eslintrc.json; fi; \
	if [ -f eslint.config.cjs ]; then mv eslint.config.cjs eslint.config.9.cjs; fi

setup-9:
	if [ -f .eslintrc.json ]; then mv .eslintrc.json .eslintrc.8.json; fi; \
	if [ -f eslint.config.9.cjs ]; then mv eslint.config.9.js eslint.config.cjs; fi
