import webpack from 'webpack';
//yargs 模块提供 argv 对象，用来读取命令行参数
import yargs from 'yargs';

export const options = yargs
    .alias('p', 'optimize-minimize')
    .alias('d', 'debug')
    .option('port', {
        default: '3000',
        type: 'string'
    })
    .argv;

export const jsLoader = 'babel?cacheDirectory';

const baseConfig = {
    entry: undefined,
    output: undefined,
    externals: undefined,
    resolve: {
        extensions: ['', '.js', '.jsx', 'css', 'scss']
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: jsLoader,
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(options.optimizeMinimize ? 'production' : 'development')
            }
        })
    ]
};

export default baseConfig;
