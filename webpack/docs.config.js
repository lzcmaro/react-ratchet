import _ from 'lodash-compat';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import baseConfig, {options, jsLoader} from './base.config';
// import ip from 'ip';

const webpackDevServerAddress = `http://127.0.0.1:${options.port}`;
const cssSourceMap = options.debug ? '?sourceMap' : '';
const reactHot = options.debug ? 'react-hot!' : '';

const entryFile = './docs/client.js';
const devEntryBundle = [
    'webpack/hot/dev-server',
    `webpack-dev-server/client?${webpackDevServerAddress}`,
    entryFile
];


baseConfig.plugins.push(new ExtractTextPlugin('[name].css'));
if (options.debug) {
    baseConfig.plugins.push(new webpack.NoErrorsPlugin());
}

export default _.extend({}, baseConfig, {

    devtool: options.debug ? 'source-map' : null,

    entry: {
        bundle: options.debug ? devEntryBundle : entryFile
    },

    output: {
        filename: '[name].js',
        path: './docs-built/assets',
        publicPath: options.debug ? `${webpackDevServerAddress}/assets/` : '/assets/'
    },

    module: {
        loaders: [{
            test: /\.js/,
            loader: `${reactHot}${jsLoader}`,
            exclude: /node_modules|Samples\.js|jquery-1\.11\.3\.min\.js|fingerblast\.js|docs\.js/
        }, {
            test: /Samples\.js/,
            loader: `${reactHot}transform?brfs!${jsLoader}`
        }, {
            test: /jquery-1\.11\.3\.min\.js|fingerblast\.js|docs\.js|docs\.css/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.scss|\.sass$/,
            loader: ExtractTextPlugin.extract('style', `css${cssSourceMap}!sass${cssSourceMap}`)
        }, {
            test: /\.jpe?g$|\.gif$|\.png|\.ico$|\.eot$|\.ttf$|\.svg$|\.woff2?$|\.html$|\.shtml$/,
            loader: 'file?name=[name].[ext]'
        }]
    }
});
