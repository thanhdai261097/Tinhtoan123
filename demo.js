
var express = require('express');
var sessions = require('express-session');
var http = require ('http');
var fs = require('fs');
var url = require('url');
var bodyParser = require('body-parser');
var path = require('path');
var link = __dirname;

var app = express();
var session;


var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(sessions({ 
	secret: '(!)*#(!JE)WJEqw09ej12',
	resave:false,
	saveUninitialized:true
}));
app.use(express.static(__dirname + '/Data'));

	function respone(ketqua,thongbao)
	{
		this.ketqua = ketqua;
		this.thongbao = thongbao;

	}

app.get('/', function(req,res)
{   
	
	res.sendFile('Tinhtoan.html', {root: __dirname});
	
	io.on('connection', function (socket) 
	{
		socket.emit('news', {data:"sdf" });
		socket.on('test',function(data) {});
		socket.on('ttt', function (data)
		{
			socket.emit('t', { my: 'data' });
			var ketqua;
			var thongbao;
			var datasend;
			if(data.transfer.a!= data.transfer.c && data.transfer.b != data.transfer.d)
			{
				ketqua = "";
				thongbao = "Giá trị nhập ở cả hai không phải là số.";
			}
			else if (data.transfer.a!= data.transfer.c )
			{
				ketqua = "";
				thongbao = "Giá trị nhập ở ô thứ nhất không phải là số.";
			}
			else if(data.transfer.b!= data.transfer.d  )
			{
				ketqua = "";
				thongbao = "Giá trị nhập ở ô thứ hai không phải là số.";
			}
			else
			{

				if((Number.isNaN(data.transfer.b) || data.transfer.b =='')&&(Number.isNaN(data.transfer.a) || data.transfer.a ==''))
					{
						ketqua = "";
						thongbao = "Giá trị nhập ở cả hai không phải là số.";
					}
					else if(Number.isNaN(data.transfer.a) || data.transfer.a =='')
					{
						ketqua = "";
						thongbao = "Giá trị nhập ở ô thứ nhất không phải là số.";
					}
					else if(Number.isNaN(data.transfer.b) || data.transfer.b =='')
					{
						ketqua = "";
						thongbao = "Giá trị nhập ở ô thứ hai không phải là số.";

					}
					
					else
					{
						if(data.transfer.pheptinh == "Cộng")
						{
							ketqua = data.transfer.a + data.transfer.b;
							thongbao = "";
							datasend = new respone(ketqua,thongbao);
						}
						else if(data.transfer.pheptinh == "Trừ")
						{
							ketqua = data.transfer.a - data.transfer.b;
							thongbao = "";
						}
						else if(data.transfer.pheptinh == "Nhân")
						{
							ketqua = data.transfer.a * data.transfer.b;
							thongbao = "";
						}
						else if(data.transfer.pheptinh == "Chia")
						{
							ketqua = data.transfer.a / data.transfer.b;
							thongbao = "";
						}
						else 
						{
							ketqua = "";
							thongbao = "Bạn chưa chọn phép tính.";
						}
					}
			}
			
			datasend = new respone(ketqua,thongbao);
			socket.emit('ketqua', {dataSend: datasend });
			socket.on('thongbao',function(data) {});

		});
	});			
});






      