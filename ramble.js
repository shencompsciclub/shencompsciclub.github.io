var tennis = "Tennis is a racket sport that is played either individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket strung with a cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. The object is to manoeuvre the ball in such a way that the opponent is not able to play a valid return. If a player is unable to return the ball successfully, the opponent scores a point.\nPlayable at all levels of society and at all ages, tennis can be played by anyone who can hold a racket, including wheelchair users. The original forms of tennis developed in France during the late Middle Ages. The modern form of tennis originated in Birmingham, England, in the late 19th century as lawn tennis. It had close connections to various field (lawn) games such as croquet and bowls as well as to the older racket sport today called real tennis.\nThe rules of modern tennis have changed little since the 1890s. Two exceptions are that until 1961 the server had to keep one foot on the ground at all times, and the adoption of the tiebreak in the 1970s. A recent addition to professional tennis has been the adoption of electronic review technology coupled with a point-challenge system, which allows a player to contest the line call of a point, a system known as Hawk-Eye.\nTennis is played by millions of recreational players and is a popular worldwide spectator sport. The four Grand Slam tournaments (also referred to as the majors) are especially popular and are considered the highest level of competition for the sport. These tournaments are the Australian Open, played on hardcourts; the French Open, played on red clay courts; Wimbledon, played on grass courts; and the US Open, also played on hardcourts. Additionally, tennis was one of the original Olympic sports, and has been consistently competed in the Summer Olympic Games since 1988.";
var words = tennis.split(/\W+/);
var uppercase = words.filter(word => word.match(/[A-Z]/));
var index = {};

for(var i = 1; i < words.length; i++)
	if(!uppercase.includes(words[i]))
		index[words[i - 1]] = [];

for(var i = 1; i < words.length; i++)
	if(!uppercase.includes(words[i]))
		index[words[i - 1]].push(words[i]);

Array.prototype.random = function() {
  return this[Math.floor((Math.random()*this.length))];
}

elytra.component("ramble", {
	props: ["words"],
	init(data) {
		var string = ""
		var word = "";
		for(i = 0; i < this.words; i++) {
			if(word in index) {
				word = index[word].random();
			} else {
				if(string)
					string = `${string.slice(0, -1)}. `;
				word = uppercase.random();
			}
			string += `${word} `;
		}
		return string;
	}
});