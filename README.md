# Poll-simulator

Operations :

- Add candidates  
- Give a vote to candidates  
- Generate report of candidates and their votes  
- Display one candidate as a winner who has highest votes    

Goal : To keep presentation layer and business layer seperate.

- Presentation layer has created using HTML,CSS and javascript.
- Business layer has created using nodejs and expressjs.
- Simple javascript arrays are used to store the data.

Source Files :  
 - Data/data.js : contains functions like set_candidates(store candidates into array) ,get_candidates(retrive candidates fromarray) ,get_votes(get total votes of a candidate)                      ,set_votes(set vote of a particular candidate) and set_voter(set voter with candidate name and voter_id)
 - Routes/route.js : contains all routes for setting and getting candidates , cast voting and count the total votes of candidates 
 - public : contains all html and css files

-> To run the application :  
- localhost : 5000  
- npm install express  
- node App.js   
