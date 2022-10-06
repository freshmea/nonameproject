추가한 내용.
- - -
# Day 1  
- - -
* 주제회의.  
* 제목 정하기.  
* 주제 : 웹 연동 감응형 신호등 시스템  
* 자료 조사 :   
	* 몽고 database:  M(mong)E(express)R(react)N(node js) - - 주연  
	* 자바스크립트:( 화면 디자인 frontend) - -  용성  
	* OpenCV 와 Yolo (Python) - - 명기  
	* 클라우드 서버: 구름 IDE  - - 수길  
* 구름 IDE 에서 MORN 스택으로 서버 만들어 보기.  
* Mongo dadabase 를 만들고 구름IDE 에서 node.js 로 만든 서버에 데이터 구현하기.  
* https://blog.goorm.io/mern-boilerplate/ 구름 IDE morn 서버 설치.  
* https://blog.goorm.io/mongo-db-atlas-cluster/ 몽고 Database 만들기.  
- - -
# Day 2
- - -
* 구름IDE 와 신호등 처리 아두이노 간의 통신을 시도. javascript net library 활용. 성공
* 구름IDE 에서 몽고 DB 에 data 를 등록 하려고 했는데 실패. 업로드 가능한
 네트워크 IP 를 등록 해야 되는데 구름IDE ip/port 는 등록 되지 않음.
* 구름IDE 에서 포트포워딩 해서 신호등 처리 간의 통신을 MORN 에서 시도 했지만
 포트가 2개만 제공됨... --> 몽고 DB 는 하지 않기로 함. 
* database 는 mysql을 서버에서 직접 돌리는 것으로 진행 되어야 할거 같음.(나중에 여유가 되면 추가하기로). 
* 3D 프린트 파츠 뽑는데 노즐이 막힘. 재료를 바꾸어서 프린트함. 아직은 잘 됨. 