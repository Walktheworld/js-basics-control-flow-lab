function scuberGreetingForFeet(distance){
  let greeting

  if (distance <= 400) {
    return greeting = 'This one is on me!';
  }  
  else if (distance > 2000 && distance < 2500) {
    return greeting = 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
  return greeting = 'No can do.';
  }
}

function ternaryCheckCity(city){
  const response = city === 'NYC' ? "Ok, sounds good." : "No go.";

  return response
}

function switchOnCharmFromTip(tip){
  
  let gratitude;

  switch (tip) {
    case 'generous':
       gratitude = 'Thank you so much.';
        break;

    case 'not as generous':
        gratitude = 'Thank you.';
        break;

    case 'thanks for everything':
        gratitude = 'Bye.';
        break;
      }
    return gratitude
  }