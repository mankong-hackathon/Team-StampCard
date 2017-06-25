const fs = require('fs');
const ANN_Classes = require('./categories.json');


let textLists = [
  ["haha", ANN_Classes.REGULAR],
  ["That's funny", ANN_Classes.REGULAR],
  
  ["Good morning, it's John calling from ABC Company.", ANN_Classes.INTRO],
  ["Have you got a min?", ANN_Classes.INTRO],
  ["Good afternoon, it's Clement calling from Company.", ANN_Classes.INTRO],
  ["Good evening, it's Chen calling from Clevo.", ANN_Classes.INTRO],
  ["Good morning, it's John calling from ABC Company. We turn sales call recordings into actionable feedback for you and your sales team. Have you got a min?", ANN_Classes.INTRO],
  ["Hello Eric, this is Steve from Clevo Analytics, have I caught you in the middle of anything?", ANN_Classes.INTRO],
  
  ["We work with companies like Google and Amazon with over 1000 hrs of call data analyzed.", ANN_Classes.CREDIBILITY],
  
  ["What is your QA process for giving feedback to your sales team? ", ANN_Classes.PROBING],
  ["How do you currently listen to your sales calls?", ANN_Classes.PROBING],
  ["How do you feel about the amount of work and complexity required to keep all of your critical applications available and performing well?", ANN_Classes.PROBING],
  ["How important is it for you to decrease or offload some of the day-to-day tasks and workload required with managing infrastructure and applications?", ANN_Classes.PROBING],
  ["How do you currently listen to your sales calls?", ANN_Classes.PROBING],
  ["Are your running most of your infrastructure and applications in-house or have you moved any of that to cloud or external data centers?", ANN_Classes.PROBING],
  ["How concerned are you about how any availability or performance disruptions will impact revenue?", ANN_Classes.PROBING],

  ["Significantly reduce coaching prep time", ANN_Classes.BENEFITS],
  ["Eliminate manually listening of sales calls", ANN_Classes.BENEFITS],
  ["Help provide more consistent feedback to each sales rep", ANN_Classes.BENEFITS],
  ["Measure and compare core skills between top and average performers", ANN_Classes.BENEFITS],
  ["Improve availability and performance of business critical applications Eliminate all of the tasks, headaches, and responsibilities that come with managing infrastructure and applications in-house.", ANN_Classes.BENEFITS],
  ["Maximize revenue by ensuring the best availability and performance of critical business applications", ANN_Classes.BENEFITS],
  ["Decrease labor costs associated with managing applications and infrastructure", ANN_Classes.BENEFITS],
  ["Improve customer experience and satisfaction by minimizing service and application disruptions", ANN_Classes.BENEFITS],

  ["Let's get started. Send me a sample of your call data and we can show you what we can do for you. Let's have a phone meeting on Monday 1pm to go over your results and the next steps", ANN_Classes.CLOSE],
  ["Send me a sample of your call data and we can show you what we can do for you. ", ANN_Classes.CLOSE],
  ["Let's have a phone meeting on Monday 1pm to go over your results and the next steps", ANN_Classes.CLOSE],
  
  ["Hi, this is Jess from the Virtual Sales Academy. How are you?", ANN_Classes.INTRO],
  ["We’re working on some solutions to help you recruit and train a new generation of salespeople. Is that something you’d like to hear more about?", ANN_Classes.INTRO],
  
  ["There are two ways companies work with us. We can either help them find salespeople for a percentage of the base salary, or help them train new salespeople with our online, on-demand, virtual sales training programs that teach them how to take prospects from curious to client. Which one would you want to hear most about?", ANN_Classes.PROBING],
  
  ["Awesome. Can I ask you a few questions first?", ANN_Classes.REGULAR],
  ["I’ll tell you a bit more, and then if it makes sense, we’ll set up an appointment before we get off our call today to go over it in more detail. Sound good?", ANN_Classes.CLOSE],
  ["Hi, My name is from KiteDesk, and the reason I’m calling is that I noticed you were hiring new SDRs from. You’re most likely hiring to solve the problem of needing more meetings, and I wanted to let you know we offer a prospecting platform designed to get your current team more qualified meetings.", ANN_Classes.INTRO],
  ["Hello, This is Bob Bentz with ATS Mobile.", ANN_Classes.INTRO],
  
  ["My name is Jane from Vancity, and the reason I’m calling is that I noticed you were hiring new SDRs from Indeed.com", ANN_Classes.INTRO],
  ["Hi how are you doing today?", ANN_Classes.INTRO],
  ["Hi, It’s Frank from Johnson & Johnson. I was referred to you by Alex from Procurify", ANN_Classes.INTRO],
  ["One of your clients,Bench Accounting, already uses our service and are very satisfied with their results.", ANN_Classes.CREDIBILITY],
  ["We now have over 3000 users and 30 restaurants on our app.", ANN_Classes.CREDIBILITY],
  ["Our customers have saved over 1000 hours of manual QA in the last month.", ANN_Classes.CREDIBILITY],
  ["Payso used our service to increase their close rate by 20%", ANN_Classes.CREDIBILITY],
  ["Are you currently using any CRM or call recording tools", ANN_Classes.PROBING],
  ["How often do you give feedback to your sales reps", ANN_Classes.PROBING],
  ["What performance metrics do use to review your team", ANN_Classes.PROBING],
  ["How long does it take you to prepare before coaching your staff", ANN_Classes.PROBING],
  ["What’s the size of your sales team?", ANN_Classes.PROBING],
  ["Do you know what makes your top sales perform better than the rest of the team?", ANN_Classes.PROBING],
  ["Improve staff availability and reduce turnover", ANN_Classes.BENEFITS],
  ["Eliminate all of the tasks, headaches, and responsibilities that come with managing infrastructure and applications in-house.", ANN_Classes.BENEFITS],
  ["Automatically increase visits from repeat customers", ANN_Classes.BENEFITS],
  ["Collect emails with little to no effort", ANN_Classes.BENEFITS],
  ["Monitor the content of calls and flag inappropriate behavior", ANN_Classes.BENEFITS],
  ["Decrease labor costs associated with manual processing", ANN_Classes.BENEFITS],
  ["Improve customer satisfaction and response time by 70%", ANN_Classes.BENEFITS],
  ["Minimize shrinkage automatically", ANN_Classes.BENEFITS],
  ["When can you start?", ANN_Classes.CLOSE],
  ["Here are the next steps", ANN_Classes.CLOSE],
  ["I can show you a demo for free if you can send me a few hours of your call recordings.", ANN_Classes.CLOSE],
  ["Let’s start by taking down company information and I’ll walk you through our setup process. ", ANN_Classes.CLOSE],
  ["Try it out for 30 days and if you’re not happy, we’ll give you your money back, no questions asked.", ANN_Classes.CLOSE],
  ["Our unlimited plan starts at $3000 per month but I can give it to you for $2500 per month.", ANN_Classes.CLOSE],

  ["Hey, it’s Clement, I am calling from Clevo. We provide call analytics to enterprise sales teams like yourself. Is this a good time?", ANN_Classes.INTRO],
  ["Well we already work with big companies like Telus and Shaw. ", ANN_Classes.CREDIBILITY],
  ["How often do you call shadow and provide feedback to your team?", ANN_Classes.PROBING],
  ["With Clevo, we can automatically transcribe and categorize your call recordings so you don’t have to do it manually.", ANN_Classes.BENEFITS]
];




fs.writeFile("dataSet.json", JSON.stringify({data: textLists}), function(err) {
  if(err) {
    return console.log(err);
  }
});

console.log("dataset is saved to 'dataSet.json file'");