const { getDefaultConfig } = require('expo/metro-config'); // або 'metro-config' якщо не Expo

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
	'@': require('path').resolve(__dirname, 'src'),
};

module.exports = defaultConfig;
