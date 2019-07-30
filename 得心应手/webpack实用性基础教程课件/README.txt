����entry
����output
����plugin��HtmlWebpackPlugin//����html�ļ�
����module����rules������ӽ���jsx �� babel-loader, ����options�е�presets����Ϊ'react'

����devServer:{
	open:true,//����ʱ���Զ����������
	port:9000//�Զ��������Ķ˿�
}
����webpack-dev-serverʱ�����Զ��ȴ������������ʹ��webpack-dev-server �������ļ��������ڴ� ��֧���ȸ��£�������ô������ļ����浽���̣���Ҫ������Ӧ�Ĵ������
��package.json��script���õ����

			�����һ������css��css-loader,��һ����css����html��style-loader��˳��ֱ��Ǵ������󣨴Ӻ���ǰ��
			rules�������ӵĶ����Ӧ��test������ƥ�䴦����ļ���atom�༭�����Զ�ͼ�λ���ʾ������ʽ��
								 ��Ӧ��use���ԣ������Ƕ�������Զ�������ʱ����Ҳ�������ַ�����Ĭ�����ã�
            �����һ�����ڼ���ͼƬ�ļ���file-loader��copyͼƬ�ļ���Ŀ��·��������·��������
			������1.css��ʽ�����ͼƬurl��background:url('path/img.jpg'); 2.import����ͼƬ; 3.require �����ͼƬ��
			�����url-loader����ͼƬ������base64����ͼƬ����������������ʺ�����СͼƬ��ͼƬ̫�󣬵ò���ʧ
			��url-loader��options�������������limit���ԣ�Լ�������ͼƬ��С��С��limit��ʹ��url-loader������limit��ʹ��file-loader��
			���������ļ�������·���£���css�ļ���ͨ��@font-face���������ļ���ʹ������������ļ�����������ʽ������ͼ�꣬����file-loader���������ļ���
			��װ����������� npm i -S font-awesome��import ���� font-awesome.css����Ȼ��ͨ��file-loaderƥ����������ļ���
			�޸�css-loader����Ϊ������ʽ����options������������cssģ�黯������module:true���޸�import css�ļ��ķ�ʽ������һ�����������յ����ģ�����ʹ�õ�ʱ��ʽ�޸�Ϊ ģ�������.ѡ��������ʽ�������һ��ѡ����������ͬ����ʽ�ļ����Ե���Ϊ��ͬ�ı�����
			����useƽ����css-loader�������õĵط����һ��exclude���ã������ų�����Ӧ�õ���loader�ģ�������moduleģ�黯�������css��ʽ�����õ�ֵ��һ��·�������顣
			�������css-loader���ÿ���һ�ݣ�����exclude�޸ĳ�include���������ð�����Щ��ʹ��ģ�黯��·���µ�css��ʽ��
			��ģ�黯���õ�css-loader������������localIdentName:'[path]-[name]-[local]_[hash:base64:6]'  
			[path]-[name]-[local]-[hash:base64:6] �ֱ���� ·����src��-ģ����-����-6λhashֵ
			���scss��ʽ�ļ���npm i -D sass-loader node-sass�����Ӵ���scss��loader���� ['style-loader','css-loader','sass-loader']
			�����Ҫscss�ļ�ģ�黯����Ҫ�������css-loader�����޸ĳ����£�
			{
				'loader':'css-loader',
				options:{
					module:true,
					localIdentName:'[name]-[local]_[hash:base64:6]'
				}
			}
			Ȼ��ʹ�õ�ʱ��ҲҪ��Ӧ���޸ĳ�import��һ�������У���ʹ�ò�ֵ���ʽ��ʽ��
			�����ϣ�����е�scss��ʽ��ģ�黯��Ҳ���Խ�����ƥ��scss��loader����ɾ��������֮ǰ����exclude��include��css-loader�����ÿ���һ��Ȼ�����޸ġ�����ʵ���и��õķ�����ʹ�ñ�����̬�޸�module���õķ�ʽ�� 
			Ҫ����less�ļ������loader��npm i -D less-loader less ,Ȼ����Խ�����scss��������ÿ���һ�ݣ�Ȼ��ƥ��ĳ�less��sass-loader�ĳ�less-loader
			

			
			
�½�һ��babel���ļ��У�����babelĿ¼��npm init
npm i -D babel-cli
babel script.js//�ᱨ�� ��Ϊ�ǰ�װ����Ŀ�� ����ȫ�ְ�װ
��������ʹ�ã�./node_modules/.bin/babel src/script.js
Ҳ������package.json �� scripts �������� babel����������
"babel":"babel src/script.js -o out/a.js"

npm install --save-dev babel-plugin-transform-es2015-arrow-functions//��ES6��ͷ��������ΪES5�Ĳ��

babel --plugins  transform-es2015-arrow-functions script.js

npm install --save-dev babel-plugin-transform-es2015-classes //��ES6�������ΪES5�Ĳ��

"babel":"babel src/script.js --plugins=transform-es2015-arrow-functions,transform-es2015-classes"

���.babelrc�����ļ� 

���ļ����������:
{
	"plugins":["transform-es2015-arrow-functions","transform-es2015-classes"]
}

��ʱ����ȥ�� package.json��scripts��babel���õ� plugins����ѡ�� --plugins=transform-es2015-arrow-functions,transform-es2015-classes

��װpresets

//������װ������ npm install --save-dev babel-cli babel-preset-es2015 ���������Ѿ���װ��babel-cli����ֻ��Ҫִ���ȵ�����
npm i -D babel-preset-es2015

�޸�.babelrc�����ļ� 
{
	"presets":["es2015"]
}

����������ָ�� -o ���� ������󲻻�������ļ���




������ʶbabel-loader

npm i -D babel-preset-env

��babel-loader��options�е�presets���������� 'env',env�����������µı�׼�﷨��es2015,es2016,es2017,es2018����

��ɣ�
options:{
	presets:['react','env'],
	plugins:['transform-object-rest-spread']
}

npm i -D babel-plugin-transform-object-rest-spread//֧�ֶ�����չת���Ĳ��

���ʹ�õ���.babelrc���޸�.babelrc�����ļ� 
{
	"presets":["es2015"],
	"plugins":["transform-object-rest-spread"]
}

�����babel-loader���޸�babel-loader��options���ã���presets��������plugins����"plugins":['transform-object-rest-spread']


�Ż�babel-loader����

����exclude����  exclude:[path.resolve(__dirname,'node_modules')]//�ų����������������ٱ���ʱ��ʹ���ļ���С��

������д������.babelrc�ļ�
{
	"presets":["react","env"],
	"plugins":["transform-object-rest-spread"]
}

Ȼ��ȥ��babel-loader����Ӧ��options���á�

babel-loader������������ǰ�ƥ�䵽���ļ�����babel����Ҳ����babel-core���������optionsѡ�����ã����û�оͻ����.babelrc�����ļ���



���·������

�޸�webpack.config.dev.js�е����·�� path:path.resolve(__dirname,'dist/assets')

�޸�HTMLWebpackPlugin��filename:'../index.html'

npm i -D clean-webpack-plugin

webpack.config.dev.js������clean-webpack-plugin

const CleanWebpackPlugin = require('clean-webpack-plugin');

�޸�plugins����

plugins:[
	new HtmlWebpackPlugin({
		filename:'../index.html',//һ�㻹��ʹ��'index.html'
		template:'src/index.html'
	}),
	new CleanWebpackPlugin(['dist'])
]

���������ļ������·����Ҳ�������ü��������ļ���file-loader

{
	test:'/\.(ttf|eot|woff|woff2|svg)$/',
	use:[{
		loader:'file-loader',
		options:{
			name:'fonts/ [name]_[hash:8].[ext]'
		}
	}]
}

ͬ���޸ļ���ͼƬ��url-loader����
{
	test:'/\.(jpg|png|gif|jpeg)$/',
	use:[{
		loader:'url-loader',
		options:{
			name:'img/ [name]_[hash:8].[ext]'
		}
	}]
}
�޸�����ļ����·��Ϊ'js/app.js'
output:{
	path:path.resolve(__dirname,'dist/assets'),
	filename:'js/app.js'
}



publicPath
�޸��ļ����·������
output:{
	path:path.resolve(__dirname,'dist/assets'),//һ������Ϊ 'dist'
	filename:'js/app.js',
	publicPath:'assets/'//������Դ�Ļ���·���������������Դ�ļ�·���������������Դ�ļ�·��ǰ�Ӵ�ǰ׺��ע��˴���/   һ������Ϊ '/'
}

�޸�devServer����

devServer:{
	open:true,//����ʱ���Զ����������
	port:9000,//�Զ��������Ķ˿�,
	contentBase:'./src/common',//�����ļ�����·����ڣ����devServer�ڴ��в��Ҳ���·�����ͻ��ڱ��ز��ҡ�
	publicPath:'/'//�����������Դ������·�� �ڴ��е�·�����
}

