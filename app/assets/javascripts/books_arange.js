//= require books_list

// 🔵
// bookIDを割り振る 2017/11/06
simg2=new Array(0);
simgAuPo=new Array(0);
testa = new Array(0);
testc = 0;
bookCount=0;
genreCount=-1;
genrePo=new Array(0);
genreList=new Array(0); // ジャンルの名前
authorList=new Array(0); // 作者の名前と、その作者の格納位置
//
reg100 = new RegExp('(^<div class=)','i');
reg2 = new RegExp('(^.*bookID=)(&authorID.*$)', 'i'); // bookID書き換える
//reg3 = new RegExp('(^.*&authorID=).*(\"><img src.*$)','i');
reg3 = new RegExp('(^.*&genreID=).*(\"><img src.*$)','i'); // genreIDを書き換える
reg7 = new RegExp('(^.*&authorID=)(.*)&?.*(&.*$)', 'i'); // authorIDを書き換える、読み取る
reg71 = new RegExp('(^.*)&authorID2=.*$','i');
reg72 = new RegExp('(^.*)&genre.*$','i');
reg10= new RegExp('^.*&authorID2=.*&.*$', 'i'); // authorID2があるかどうか
reg9 = new RegExp('(^.*&authorID2=)(.*)(&.*$)', 'i'); // authorID2を書き換える、読み取る
reg8 = new RegExp('^.*&authorID=(.*)&.*$', 'i'); // authorIDを読み取る
reg6 = new RegExp('(&authorID=.*)&authorID2=(.*&genreID)','i');
reg4 = new RegExp('^genre@.*','i');
reg5 = new RegExp('genre@(.*)&(.*$)','i');
// 🔵使用する正規表現の準備
// 型を指定する
regCheck = new RegExp('<div class=\"iconBuyButton\"><a target=\"_self\" href=\".*\"><img src=\".*\"></a><a target=\"_blank\" href=\".*\"></a></div>','i');
// 🔵IDへの番号振り分けと配列作成
for( loopNumber = 0 ; loopNumber< simg.length ; loopNumber++ ) {
	// 型が違う場合は無視する
	if( regCheck.test( simg[loopNumber] ) ){
		countNumberSt = bookCount + '';
		countNumberSt2 = genreCount + '';
		str1=simg[loopNumber].replace(reg2,"$1"+countNumberSt+"$2"); // bookIDを書き込む
		str2=str1.replace(reg3,"$1"+countNumberSt2+"$2"); // genreIDを書き換える
		str3=str2.replace(reg7,"$2"); // 作者1の名前を読み込む
		str3=str3.replace(reg71,"$1");
		str3=str3.replace(reg72,"$1");
		counta=-1;
		// 作者1の名前が既に登録されているなら、bookIDを記録、ないなら登録
		for(loopNumber2=0;loopNumber2<authorList.length;loopNumber2++){
			if( authorList[loopNumber2][0] == str3 ){
				authorList[loopNumber2][authorList[loopNumber2].length]=bookCount;
				countNumberSt3 = loopNumber2 + '';
				str4=str2.replace(str3,countNumberSt3);
				counta=loopNumber2;
			}
		}
		if(counta==-1){
			authorList.push(new Array(0));
			authorList[authorList.length-1][0]=str3;
			countNumberSt3 = (authorList.length-1) + '';
			authorList[authorList.length-1][1]=bookCount;
			str4=str2.replace(str3,countNumberSt3);
		}
		// 作者2の名前が既に登録されているなら、bookIDを記録、ないなら登録
		if ( reg10.test( str2 ) ){
			str3=str2.replace(reg9,"$2"); // 作者2の名前を読み込む
			str3=str3.replace(reg72,"$1");
			counta=-1;
			for(loopNumber2=0;loopNumber2<authorList.length;loopNumber2++){
				if( authorList[loopNumber2][0] == str3 ){
					authorList[loopNumber2][authorList[loopNumber2].length]=bookCount;
					countNumberSt3 = loopNumber2 + '';
					str4=str4.replace(str3,countNumberSt3);
					counta=loopNumber2;
				}
			}
			if(counta==-1){
				authorList.push(new Array(0));
				authorList[authorList.length-1][0]=str3;
				countNumberSt3 = (authorList.length-1) + '';
				authorList[authorList.length-1][1]=bookCount;
				str4=str4.replace(str3,countNumberSt3);

			}
		}
		// 作成した新しい文字列を記録
		simg2.push( str4 );
		bookCount++;
	}else{
		genrePo.push(bookCount);
		genreList.push(simg[loopNumber].replace(reg5,"$2"));
		genreCount++;
	}
}
// 受け渡し処理
simgCopyLength = simg2.length;
simgCopy01 = simg2.concat();
