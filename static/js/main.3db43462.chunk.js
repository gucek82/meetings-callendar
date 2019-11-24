(this["webpackJsonpmeeting-app"]=this["webpackJsonpmeeting-app"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(8),r=n.n(o),c=(n(14),n(6)),s=n(1),l=n(2),d=n(4),u=n(3),m=n(5),p=(n(15),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={subject:"",description:"",dateStart:(new Date).toISOString().slice(0,10),timeStart:(new Date).toLocaleTimeString().slice(0,5),dateEnd:(new Date).toISOString().slice(0,10),timeEnd:(new Date).toLocaleTimeString().slice(0,5)},n.handleSubject=function(t){n.setState({subject:t.target.value})},n.handleDescription=function(t){n.setState({description:t.target.value})},n.handleDateStart=function(t){n.setState({dateStart:t.target.value})},n.handleTimeStart=function(t){n.setState({timeStart:t.target.value})},n.handleTimeEnd=function(t){n.setState({timeEnd:t.target.value})},n.handleDateEnd=function(t){n.setState({dateEnd:t.target.value})},n.handleClick=function(){console.log("dodaj");var t=n.state,e=t.subject,a=t.description,i=t.dateStart,o=t.timeStart,r=t.dateEnd,c=t.timeEnd,s=t.option;e.length>2?n.props.meetings(e,a,i,o,r,c,s)&&n.setState({subject:"",description:"",dateStart:i,timeStart:o,dateEnd:r,timeEnd:c,option:!1}):alert("za kr\xf3tka nazwa")},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=(new Date).toISOString().slice(0,10),e=1*t.slice(0,4)+1;e+="-12-31";var n=(new Date).toLocaleTimeString().slice(0,5);return i.a.createElement("div",{className:"form"},i.a.createElement("input",{type:"text",placeholder:"temat spotkania...",value:this.state.subject,onChange:this.handleSubject}),i.a.createElement("textarea",{type:"text",placeholder:"opis spotkania...",value:this.state.description,onChange:this.handleDescription}),i.a.createElement("h4",null,"Data spotkania:"),i.a.createElement("label",null,"Od",i.a.createElement("input",{type:"date",value:this.state.dateStart,min:t,max:e,onChange:this.handleDateStart}),i.a.createElement("input",{type:"time",value:this.state.timeStart,min:n,onChange:this.handleTimeStart})),i.a.createElement("label",null,"Do:",i.a.createElement("input",{type:"date",value:this.state.dateEnd,min:t,max:e,onChange:this.handleDateEnd}),i.a.createElement("input",{type:"time",value:this.state.timeEnd,min:n,onChange:this.handleTimeEnd})),i.a.createElement("button",{onClick:this.handleClick},"Dodaj"))}}]),e}(a.Component)),h=(n(16),function(t){return i.a.createElement("div",{className:"single-meeting"},i.a.createElement("p",null,i.a.createElement("span",{onClick:function(){return t.showDesc(t.id)}},i.a.createElement("strong",null," ",t.subject," "),i.a.createElement("em",null,t.dateStart," godzina ",t.timeStart," do ",t.dateEnd," ",t.timeEnd)),i.a.createElement("button",{onClick:function(){return t.delete(t.id)}}," X ")),i.a.createElement("p",{className:t.option?"show":"hidden"},t.description))}),g=function(t){return console.log(t.meetingList),console.log(t.option),i.a.createElement("select",{value:t.option,onChange:t.change},i.a.createElement("option",{value:"up"},"Data rosn\u0105co"),i.a.createElement("option",{value:"down"},"Data malej\u0105co"))},E=function(t){var e=t.meetingsList;"up"===t.option?e.sort((function(t,e){return(t=t.dateStart)<(e=e.dateStart)?-1:t>e?1:0})):"down"===t.option&&e.sort((function(t,e){return(t=t.dateStart)>(e=e.dateStart)?-1:t<e?1:0})),console.log(e);var n=e.map((function(e){return i.a.createElement(h,{key:e.id,id:e.id,subject:e.subject,description:e.description,dateStart:e.dateStart,timeStart:e.timeStart,dateEnd:e.dateEnd,timeEnd:e.timeEnd,delete:t.deleteMeeting,option:e.option,showDesc:t.showDesc})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("h2",null,"Moje spotkania"),i.a.createElement(g,{meetingList:e,change:t.change,option:t.option}),n))},S=(n(17),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).counter=9,n.option="down",n.state={meetings:[{id:0,subject:"Spotkanie nr 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi praesentium dolor quam nihil, explicabo sit corporis nesciunt tenetur dolores.",dateStart:"2019-11-22",timeStart:"11:30",dateEnd:"2019-11-22",timeEnd:"12:30",option:!1},{id:1,subject:"Spotkanie nr 2",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi praesentium dolor quam nihil, explicabo sit corporis nesciunt tenetur dolores.",dateStart:"2019-11-23",timeStart:"11:30",dateEnd:"2019-11-23",timeEnd:"12:30",option:!1},{id:2,subject:"Spotkanie nr 3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi praesentium dolor quam nihil, explicabo sit corporis nesciunt tenetur dolores.",dateStart:"2019-11-27",timeStart:"11:30",dateEnd:"2019-11-27",timeEnd:"12:30",option:!1},{id:3,subject:"Spotkanie nr 4",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi praesentium dolor quam nihil, explicabo sit corporis nesciunt tenetur dolores.",dateStart:"2019-11-19",timeStart:"11:30",dateEnd:"2019-11-19",timeEnd:"12:30",option:!1}],option:"up"},n.handleShowDesc=function(t){var e=Object(c.a)(n.state.meetings);e.forEach((function(e){e.id===t&&(e.option=!e.option)})),n.setState({meetings:e})},n.sortMeetings=function(t){n.setState({option:t.target.value})},n.addMeeting=function(t,e,a,i,o,r){var s={id:n.counter,subject:t,description:e,dateStart:a,timeStart:i,dateEnd:o,timeEnd:r};return n.counter++,n.setState({meetings:[].concat(Object(c.a)(n.state.meetings),[s])}),!0},n.deleteMeeting=function(t){console.log("delete elementu o id"+t);var e=Object(c.a)(n.state.meetings),a=e.findIndex((function(e){return e.id===t}));e.splice(a,1),n.setState({meetings:e})},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return console.log(this.state.option),i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Callendar App"),i.a.createElement(p,{meetings:this.addMeeting}),i.a.createElement(E,{meetingsList:this.state.meetings,option:this.state.option,deleteMeeting:this.deleteMeeting,change:this.sortMeetings,showDesc:this.handleShowDesc}))}}]),e}(a.Component));r.a.render(i.a.createElement(S,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3db43462.chunk.js.map