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
* openCV 라즈베리파이 영상 자료. 실행시킬 때 옵션만 바꾸면 됨. mjpeg
* 스트리밍 서버를 설치해서 구명한 다음에 openCV 로 욜로를 돌려보는 것. Yolo2 tiny 같은 가벼운 weight 사용.
* #!(shebang)-- 불어 해석기의 위치를 알려줌.
* https://www.youtube.com/watch?v=6GECT2Jrr_g 리액트 기본 사용법 학습
- - -
# Day 3
- - -
* 3D 프린트 파츠 불빛 출력 실패.
* react server-client data transmition
* https://www.youtube.com/watch?v=d6suykcsNeY 
* postman install 
* server-client connection by get, post using postman
* fetch 패치 문제 해결.
* cors problem solves 서버 클라이언트 공유 문제 해결
*

- - -
# Day 4
- - -
* https://www.dropbox.com/sh/j18l69uq8iw3bia/AAD1cA4NQPrWYx5ZoCjNV9q3a/work/python?dl=0&subfolder_nav_tracking=1
* Yolo example  
* Yolo 를 이용해서 사람을 찾는 예제. 리눅스 환경에서 파이썬으로 실행.
* client 에서 신호 받았을 때, 화면 전환 시도.  -- > useEffect 에 signal 추가 
* 서버에서 신호를 추가 하고 웹페이지 변화하게 만듬.
* 아두이노 신호 처리 (내부 시그널이 돌아 가면서 신호가 올때만 파란불이 켜짐)

- - -
# Day 5
- - -
* 신호등 모델 만들기. 
* 영상 파일 만들기.
* 