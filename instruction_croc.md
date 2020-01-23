:How the Game should look in the Command Line(Bash Terminal)

    `_`: clear crocodile 

    `C`:crocodile

        --P--
        --C--
        CC-CC
        CC-CC
    Left, right, neither 

    left:
        -----
        -PC--
        CC-CC
        CC-CC
    Left, right, neither 

    right:
        -----
        --C--
        CC-CC
        CCPCC

    Left, right, neither 

    neither:
        You Survived

    

:Steps 

    1: Define the player one character wide

    2: If the PLayer is in the same position as the corocodile then 
        Console.log("You Were Eaten")

    3: Puts the whole river where the player is 
    
    4: Ask the player if they want to go left or right 

    5: The player enters 'left', 'right', or 'neither'

    6: Make the player float down the river by  one driver part(one line of digits). Move them to the 'left', 'right'  or keep them where they are. 

    7: Print 'You Survived' if the player makes it past all parts of the river without hitting a crocodile 

    Note:
    Stop the game when the user is eaten or survives the whole river, dont use 'exit' to quit the program because this will break the automated tests. 
    To exit a while loop early, use the 'break' keyword. 

    Note: You can assume the player will never move outside the boundary of the river when they choose left and right. You can also assume the player will always enter either, right or netither. 

