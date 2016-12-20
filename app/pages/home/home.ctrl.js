import {homeXebians, numbersCards, citations, timelineItems} from '../../constants/home.constants';

export default class HomeController {
  constructor(){
    this.xebians = homeXebians;
    this.numbersCards = numbersCards;
    this.citations = citations;
    this.timelineItems = timelineItems;

    this.showCaseTitle = 'Vis ma vie chez Xebia';
    this.showCaseMainDescription = 'Explorez notre univers et nos passions.';
    this.showCaseSubDescription = '#XebiaLife';
  }
}

HomeController.$inject = [];