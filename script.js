btn.onclick = function () {
    var team1 = document.getElementById('team1_scores').value;
    var team2 = document.getElementById('team2_scores').value;
    if (team1==7 && team2==0) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list:(1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 5), (2 2 2 1), (2 2 3), (2 5), (3 1 1 2), (3 2 2), (3 3 1), (3 4), (4 1 1 1), (4 2 1), (5 1 1), (5 2),(6 1), (7). Team2 score list: (0)";
    }
    if (team1==6 && team2==0) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1 1 1 1 1 1), (1 1 1 1 2), (1 2 3), (1 1 4), (2 4), (2 2 2), (2 2 1 1), (1 1 1 3), (3 3), (1 5), (6). Team2 score list: (0).";
    }
    if (team1==6 && team2==1) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1 1 1 1 1 1), (1 1 1 1 2), (1 2 3), (1 1 4), (2 4), (2 2 2), (2 2 1 1), (1 1 1 3), (3 3), (1 5), (6). Team2 score list: (1).";
    }
    if (team1==5 && team2==0) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list:(1 1 1 1 1), (1 1 1 2), (2 3), (2 2 1), (1 1 3), (1 4), (5). Team2 score list: (0)";
    }
    if (team1==5 && team2==1) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list:(1 1 1 1 1), (1 1 1 2), (2 3), (2 2 1), (1 1 3), (1 4), (5). Team2 score list: (1)";
    }
    if (team1==5 && team2==2) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list:(1 1 1 1 1), (1 1 1 2), (2 3), (2 2 1), (1 1 3), (1 4), (5). Team2 score list: (1 1), (2)";
    }
    if (team1==4 && team2==0) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1 1 1 1), (1 1 2), (2 2), (1 3), (4). Team2 score list: (0)";
    }
    if (team1==4 && team2==1) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1 1 1 1), (1 1 2), (2 2), (1 3), (4). Team2 score list: (1)";
    }
    if (team1==4 && team2==2) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1 1 1 1), (1 1 2), (2 2), (1 3), (4). Team2 score list: (1 1), (2)";
    }
    if (team1==4 && team2==3) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1 1 1 1), (1 1 2), (2 2), (1 3), (4). Team2 score list: (1 1 1), (1 2), (3)";
    }
    if (team1==3 && team2==0) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list:(1 1 1), (1 2), (3). Team2 score list: (0)";
    }
    if (team1==3 && team2==1) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list:(1 1 1), (1 2), (3). Team2 score list: (1)";
    }
    if (team1==3 && team2==2) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list:(1 1 1), (1 2), (3). Team2 score list: (1 1), (2)";
    }
    if (team1==3 && team2==3) {
        document.getElementById('score_list').innerHTML="Winner: team1 and team2. Score list:(1 1 1), (1 2), (3)";
    }
    if (team1==2 && team2==0) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1 1), (2). Team2 score list: (0)";
    }
    if (team1==2 && team2==1) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1 1), (2). Team2 score list: (1)";
    }
    if (team1==2 && team2==2) {
        document.getElementById('score_list').innerHTML="Winner: team1 and team2. Score list: (1 1), (2).";
    }
    if (team1==1 && team2==0) {
        document.getElementById('score_list').innerHTML="Winner: team1. Team1 score list: (1). Team2 score list: (0)";
    }
    if (team1==1 && team2==1) {
        document.getElementById('score_list').innerHTML="Winner: team1 and team2. Score list: (1)";
    }
    if (team1==0 && team2==0) {
        document.getElementById('score_list').innerHTML="Winner: team1 and team2. Score list: (0). Team2 score list: (0)";
    }
    if (team1==0 && team2==7) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 5), (2 2 2 1), (2 2 3), (2 5), (3 1 1 2), (3 2 2), (3 3 1), (3 4), (4 1 1 1), (4 2 1), (5 1 1), (5 2),(6 1), (7). Team1 score list: (0)";
    }
    if (team1==0 && team2==6) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list: (1 1 1 1 1 1), (1 1 1 1 2), (1 2 3), (1 1 4), (2 4), (2 2 2), (2 2 1 1), (1 1 1 3), (3 3), (1 5), (6). Team1 score list: (0).";
    }
    if (team1==1 && team2==6) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list: (1 1 1 1 1 1), (1 1 1 1 2), (1 2 3), (1 1 4), (2 4), (2 2 2), (2 2 1 1), (1 1 1 3), (3 3), (1 5), (6). Team1 score list: (1).";
    }
    if (team1==0 && team2==5) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1 1 1 1), (1 1 1 2), (2 3), (2 2 1), (1 1 3), (1 4), (5). Team1 score list: (0)";
    }
    if (team1==1 && team2==5) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1 1 1 1), (1 1 1 2), (2 3), (2 2 1), (1 1 3), (1 4), (5). Team1 score list: (1)";
    }
    if (team1==2 && team2==5) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1 1 1 1), (1 1 1 2), (2 3), (2 2 1), (1 1 3), (1 4), (5). Team1 score list: (1 1), (2)";
    }
    if (team1==0 && team2==4) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list: (1 1 1 1), (1 1 2), (2 2), (1 3), (4). Team1 score list: (0)";
    }
    if (team1==1 && team2==4) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list: (1 1 1 1), (1 1 2), (2 2), (1 3), (4). Team1 score list: (1)";
    }
    if (team1==2 && team2==4) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list: (1 1 1 1), (1 1 2), (2 2), (1 3), (4). Team1 score list: (1 1), (2)";
    }
    if (team1==3 && team2==4) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list: (1 1 1 1), (1 1 2), (2 2), (1 3), (4). Team1 score list: (1 1 1), (1 2), (3)";
    }
    if (team1==0 && team2==3) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1 1), (1 2), (3). Team1 score list: (0)";
    }
    if (team1==1 && team2==3) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1 1), (1 2), (3). Team1 score list: (1)";
    }
    if (team1==2 && team2==3) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1 1), (1 2), (3). Team1 score list: (1 1), (2)";
    }
    if (team1==0 && team2==2) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1), (2). Team1 score list: (0)";
    }
    if (team1==1 && team2==2) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1 1), (2). Team1 score list: (1)";
    }
    if (team1==0 && team2==1) {
        document.getElementById('score_list').innerHTML="Winner: team2. Team2 score list:(1). Team1 score list: (0)";
    }
    if (team1<0 || team2<0) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1>7 || team2>7) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==7 && team2==1) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==7 && team2==2) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==7 && team2==3) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==7 && team2==4) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==7 && team2==5) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==7 && team2==6) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==7 && team2==7) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==6 && team2==2) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==6 && team2==3) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==6 && team2==4) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==6 && team2==5) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==6 && team2==6) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==6 && team2==7) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==5 && team2==3) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==5 && team2==4) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==5 && team2==5) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==5 && team2==6) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==5 && team2==7) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==4 && team2==4) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==4 && team2==5) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==4 && team2==6) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==4 && team2==7) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==3 && team2==5) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==3 && team2==6) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==3 && team2==7) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==2 && team2==6) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==2 && team2==7) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    if (team1==1 && team2==7) {
        document.getElementById('score_list').innerHTML="Enter other numbers";
    }
    
    var team1_players = document.getElementById('team1_players').value;
    var team2_players = document.getElementById('team2_players').value;
    var team1_arr = team1_players.split("\n");
    var team2_arr = team2_players.split("\n");
  
        if(team1_arr.length > 11){
            alert("The number of players in a single team cannot be more than 11.")
            document.getElementById('team1_players').value = "";
        }
        else if (team1_arr.length < 7) {
            alert("The number of players in a single team cannot be less than 7.")
        }
        else{
            console.log("Players of team1:")
            team1_arr.forEach(list);
        }
        function list(players) {
            console.log(players)
        }
        if(team2_arr.length > 11){
            alert("The number of players in a single team cannot be more than 11.")
        }
        else if (team2_arr.length < 7) {
            alert("The number of players in a single team cannot be less than 7.")
        }
        else{
            console.log("Players of team2:")
            team2_arr.forEach(list);
        }
}; 

