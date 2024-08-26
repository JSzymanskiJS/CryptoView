# 4. Token Balance Lookup:
25.08.2024:
---
20.53: I am creating new testing account on metamask. I am sending ETH on Sepolia testnet to WETH9 (0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14) to get the deposit. I am getting WETH9 so now I can check the balance on it. I assume that nothing more than WETH9 is necessary to test it as a PoC. I also assume, that we do not need to write tests here, so I am not doing that, but obviously If I will write endpoint in work it should be tested according to the needs of the functionality. Now I am just going straight to the core of the problem. 
22.03: I am first time coding Backend in JS. TBH I see that it is very similar to creation of API endpoints in FastAPI or a bit similar to Django RESTR Framework. The bug difference is with testing. It is so much easier in python frameworks - everything is inside them thanks to the swaggerUI which is automatically build in parallel to the API itself. Therefore it is easy to test just by pasting the values into the specific fields. So I had to install and use Postman too. 
22:11 I wanted to end the coding session, but I realised that I can do one more thing before going to bed.
22.27: I will call it a day for today. See you tommorow :).

26.08.2024
---
06.26: Ok, so.. Now I realised how much coding backend in node is different than in FastAPI. For me major (but also minor - when you know where to search) difference is lack of SwaggerUI. It automatically generates you the fields that will correspond to right parameters of URL or inside the body. Also it will automatically format them according to the schema that is generated from endpoint serializers. So basically it will do all of the work of preparing the tests for you. Postman does not know the serializers of thje endpoint so I just have to manually do all of the work.

I didn't know if I should add authentication to this endpoint. It is just a balance lookup after all. I decided to not give it, but then this endpoint should get in the end some kind of protection from DoS attacks. Simple one is to configure the limits for this API per IP address.

I still need to add the node provider URL to the .env file. I have to read how to get it. In Django REST Framework we had a separate file that was creating all of the Env Variables and stored them insige Django settings, so you only needed to call them from settings module and you were alright.

06:39 Ok, so I see that you probably have to call `dotenv.config()` function in every file in which you need to get the env vars. The hey is - it works now as it should.

I devinetly could add more error messages so the end user will have better understanding for what is going on in the endpoint. It is really annoying in that some APIs (like e.g. API of Vast.ai https://vast.ai/) return the same error mesages - which is almost no error messages in practice. You just can't debug that easily. Therefore many programmers will get annoyed by it and use product of the competitor. I won't add them, because I approch this functionality as a PoC.


Final Conclusions
---
I think I can call it the end of task 4. I definetly learned a lot about Express framework. I struggled a bit with a few things - especially with the convention of the this framework at the beginning. I opened a few "crash courses" of Express.js, mongoDB and mongoose. Then I realised where it is similar to the FasAPI.  I started to code and slowly, but surely got to the end of this task. I also used web3.py quite a bit of time ago - typically we have used Ethers.js with Hardhat to code the tests and deploy scritps. I also worked lately mainly on the optimization of clusters autoscaling and debugging of HAProxy load balancer mechanism, so I opened a few tutorials on the second monitor to remind myself about the used conventions for specific web3.js functionalities. One time I used chatGPT for the JS substitute of python f-strings. I decided to ask "him" about it, because typically he can provide quite good keywords for further research in given topic. They didn't work the way I undferstood them from "him", so I left them for now. I could debug them and show that I can do it too. It is not the main topic of the task though. I can return to them later. i.e. when I'll finish 3 different tasks. 

See you soon :)


