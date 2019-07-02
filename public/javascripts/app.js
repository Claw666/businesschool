var app = angular.module('angularApp',['ui.router']);

app.config(function($stateProvider){
  // An array of state definitions
  var states = [
    { 
      name: 'sort-group-A', 
      url: 'staffdirectory/sort-group-A', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesA();
        }
      }
    },

    { 
      name: 'sort-group-B', 
      url: 'staffdirectory/sort-group-B', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesB();
        }
      }
    },

    { 
      name: 'sort-group-C', 
      url: 'staffdirectory/sort-group-C', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesC();
        }
      }
    },

    { 
      name: 'sort-group-D', 
      url: 'staffdirectory/sort-group-D', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesD();
        }
      }
    },

    { 
      name: 'sort-group-E', 
      url: 'staffdirectory/sort-group-E', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesE();
        }
      }
    },

    { 
      name: 'sort-group-F', 
      url: 'staffdirectory/sort-group-F', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesF();
        }
      }
    },

    { 
      name: 'sort-group-G', 
      url: 'staffdirectory/sort-group-G', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesG();
        }
      }
    },

    { 
      name: 'sort-group-H', 
      url: 'staffdirectory/sort-group-H', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesH();
        }
      }
    },

    { 
      name: 'sort-group-I', 
      url: 'staffdirectory/sort-group-I', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesI();
        }
      }
    },

    { 
      name: 'sort-group-J', 
      url: 'staffdirectory/sort-group-J', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesJ();
        }
      }
    },

    { 
      name: 'sort-group-K', 
      url: 'staffdirectory/sort-group-K', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesK();
        }
      }
    },

    { 
      name: 'sort-group-L', 
      url: 'staffdirectory/sort-group-L', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesL();
        }
      }
    },

    { 
      name: 'sort-group-M', 
      url: 'staffdirectory/sort-group-M', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesM();
        }
      }
    },

    { 
      name: 'sort-group-N', 
      url: 'staffdirectory/sort-group-N', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesN();
        }
      }
    },

    { 
      name: 'sort-group-O', 
      url: 'staffdirectory/sort-group-O', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesO();
        }
      }
    },

    { 
      name: 'sort-group-P', 
      url: 'staffdirectory/sort-group-P', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesP();
        }
      }
    },

    { 
      name: 'sort-group-Q', 
      url: 'staffdirectory/sort-group-Q', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesQ();
        }
      }
    },

    { 
      name: 'sort-group-R', 
      url: 'staffdirectory/sort-group-R', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesR();
        }
      }
    },

    { 
      name: 'sort-group-S', 
      url: 'staffdirectory/sort-group-S', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesS();
        }
      }
    },

    { 
      name: 'sort-group-T', 
      url: 'staffdirectory/sort-group-T', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesT();
        }
      }
    },

    { 
      name: 'sort-group-U', 
      url: 'staffdirectory/sort-group-U', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesU();
        }
      }
    },

    { 
      name: 'sort-group-V', 
      url: 'staffdirectory/sort-group-V', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesV();
        }
      }
    },

    { 
      name: 'sort-group-W', 
      url: 'staffdirectory/sort-group-W', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesW();
        }
      }
    },

    { 
      name: 'sort-group-X', 
      url: 'staffdirectory/sort-group-X', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesX();
        }
      }
    },

    { 
      name: 'sort-group-Y', 
      url: 'staffdirectory/sort-group-Y', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesY();
        }
      }
    },

    { 
      name: 'sort-group-Z', 
      url: 'staffdirectory/sort-group-Z', 
      // Using component: instead of template:
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesZ();
        }
      }
    },






    { 
      name: 'depaccounting-sort-group-a', 
      url: 'accounting/sort-group-A', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingA();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-b', 
      url: 'accounting/sort-group-B', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingB();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-c', 
      url: 'accounting/sort-group-C', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingC();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-d', 
      url: 'accounting/sort-group-D', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingD();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-e', 
      url: 'accounting/sort-group-E', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingE();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-f', 
      url: 'accounting/sort-group-F', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingF();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-g', 
      url: 'accounting/sort-group-G', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingG();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-h', 
      url: 'accounting/sort-group-H', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingH();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-i', 
      url: 'accounting/sort-group-I', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingI();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-j', 
      url: 'accounting/sort-group-J', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingJ();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-k', 
      url: 'accounting/sort-group-K', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingK();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-l', 
      url: 'accounting/sort-group-L', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingL();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-m', 
      url: 'accounting/sort-group-M', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingM();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-n', 
      url: 'accounting/sort-group-N', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingN();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-o', 
      url: 'accounting/sort-group-O', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingO();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-p', 
      url: 'accounting/sort-group-P', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingP();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-q', 
      url: 'accounting/sort-group-Q', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingQ();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-r', 
      url: 'accounting/sort-group-R', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingR();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-s', 
      url: 'accounting/sort-group-S', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingS();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-t', 
      url: 'accounting/sort-group-T', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingT();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-u', 
      url: 'accounting/sort-group-U', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingU();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-v', 
      url: 'accounting/sort-group-V', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingV();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-w', 
      url: 'accounting/sort-group-W', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingW();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-x', 
      url: 'accounting/sort-group-X', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingX();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-y', 
      url: 'accounting/sort-group-Y', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingY();
        }
      }
    },

    { 
      name: 'depaccounting-sort-group-z', 
      url: 'accounting/sort-group-Z', 
      // Using component: instead of template:
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccountingZ();
        }
      }
    },








    { 
      name: 'depbanking-sort-group-a', 
      url: 'banking/sort-group-A', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingA();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-b', 
      url: 'banking/sort-group-B', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingB();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-c', 
      url: 'banking/sort-group-C', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingC();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-d', 
      url: 'banking/sort-group-D', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingD();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-e', 
      url: 'banking/sort-group-E', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingE();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-f', 
      url: 'banking/sort-group-F', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingF();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-g', 
      url: 'banking/sort-group-G', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingG();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-h', 
      url: 'banking/sort-group-H', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingH();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-i', 
      url: 'banking/sort-group-I', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingI();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-j', 
      url: 'banking/sort-group-J', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingJ();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-k', 
      url: 'banking/sort-group-K', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingK();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-l', 
      url: 'banking/sort-group-L', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingL();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-m', 
      url: 'banking/sort-group-M', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingM();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-n', 
      url: 'banking/sort-group-N', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingN();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-o', 
      url: 'banking/sort-group-O', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingO();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-p', 
      url: 'banking/sort-group-P', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingP();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-q', 
      url: 'banking/sort-group-Q', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingQ();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-r', 
      url: 'banking/sort-group-R', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingR();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-s', 
      url: 'banking/sort-group-S', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingS();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-t', 
      url: 'banking/sort-group-T', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingT();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-u', 
      url: 'banking/sort-group-U', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingU();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-v', 
      url: 'banking/sort-group-V', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingV();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-w', 
      url: 'banking/sort-group-W', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingW();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-x', 
      url: 'banking/sort-group-X', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingX();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-y', 
      url: 'banking/sort-group-Y', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingY();
        }
      }
    },

    { 
      name: 'depbanking-sort-group-z', 
      url: 'banking/sort-group-Z', 
      // Using component: instead of template:
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBankingZ();
        }
      }
    },






    { 
      name: 'depdecision-sort-group-a', 
      url: 'decision/sort-group-A', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionA();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-b', 
      url: 'decision/sort-group-B', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionB();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-c', 
      url: 'decision/sort-group-C', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionC();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-d', 
      url: 'decision/sort-group-D', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionD();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-e', 
      url: 'decision/sort-group-E', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionE();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-f', 
      url: 'decision/sort-group-F', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionF();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-g', 
      url: 'decision/sort-group-G', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionG();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-h', 
      url: 'decision/sort-group-H', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionH();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-i', 
      url: 'decision/sort-group-I', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionI();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-j', 
      url: 'decision/sort-group-J', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionJ();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-k', 
      url: 'decision/sort-group-K', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionK();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-l', 
      url: 'decision/sort-group-L', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionL();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-m', 
      url: 'decision/sort-group-M', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionM();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-n', 
      url: 'decision/sort-group-N', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionN();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-o', 
      url: 'decision/sort-group-O', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionO();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-p', 
      url: 'decision/sort-group-P', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionP();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-q', 
      url: 'decision/sort-group-Q', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionQ();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-r', 
      url: 'decision/sort-group-R', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionR();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-s', 
      url: 'decision/sort-group-S', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionS();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-t', 
      url: 'decision/sort-group-T', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionT();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-u', 
      url: 'decision/sort-group-U', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionU();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-v', 
      url: 'decision/sort-group-V', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionV();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-w', 
      url: 'decision/sort-group-W', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionW();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-x', 
      url: 'decision/sort-group-X', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionX();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-y', 
      url: 'decision/sort-group-Y', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionY();
        }
      }
    },

    { 
      name: 'depdecision-sort-group-z', 
      url: 'decision/sort-group-Z', 
      // Using component: instead of template:
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecisionZ();
        }
      }
    },










    { 
      name: 'depmarketing-sort-group-a', 
      url: 'marketing/sort-group-A', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingA();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-b', 
      url: 'marketing/sort-group-B', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingB();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-c', 
      url: 'marketing/sort-group-C', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingC();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-d', 
      url: 'marketing/sort-group-D', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingD();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-e', 
      url: 'marketing/sort-group-E', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingE();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-f', 
      url: 'marketing/sort-group-F', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingF();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-g', 
      url: 'marketing/sort-group-G', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingG();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-h', 
      url: 'marketing/sort-group-H', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingH();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-i', 
      url: 'marketing/sort-group-I', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingI();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-j', 
      url: 'marketing/sort-group-J', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingJ();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-k', 
      url: 'marketing/sort-group-K', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingK();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-l', 
      url: 'marketing/sort-group-L', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingL();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-m', 
      url: 'marketing/sort-group-M', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingM();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-n', 
      url: 'marketing/sort-group-N', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingN();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-o', 
      url: 'marketing/sort-group-O', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingO();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-p', 
      url: 'marketing/sort-group-P', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingP();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-q', 
      url: 'marketing/sort-group-Q', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingQ();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-r', 
      url: 'marketing/sort-group-R', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingR();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-s', 
      url: 'marketing/sort-group-S', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingS();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-t', 
      url: 'marketing/sort-group-T', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingT();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-u', 
      url: 'marketing/sort-group-U', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingU();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-v', 
      url: 'marketing/sort-group-V', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingV();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-w', 
      url: 'marketing/sort-group-W', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingW();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-x', 
      url: 'marketing/sort-group-X', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingX();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-y', 
      url: 'marketing/sort-group-Y', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingY();
        }
      }
    },

    { 
      name: 'depmarketing-sort-group-z', 
      url: 'marketing/sort-group-Z', 
      // Using component: instead of template:
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketingZ();
        }
      }
    },











    { 
      name: 'dephr-sort-group-a', 
      url: 'human/sort-group-A', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrA();
        }
      }
    },

    { 
      name: 'dephr-sort-group-b', 
      url: 'human/sort-group-B', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrB();
        }
      }
    },

    { 
      name: 'dephr-sort-group-c', 
      url: 'human/sort-group-C', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrC();
        }
      }
    },

    { 
      name: 'dephr-sort-group-d', 
      url: 'human/sort-group-D', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrD();
        }
      }
    },

    { 
      name: 'dephr-sort-group-e', 
      url: 'human/sort-group-E', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrE();
        }
      }
    },

    { 
      name: 'dephr-sort-group-f', 
      url: 'human/sort-group-F', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrF();
        }
      }
    },

    { 
      name: 'dephr-sort-group-g', 
      url: 'human/sort-group-G', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrG();
        }
      }
    },

    { 
      name: 'dephr-sort-group-h', 
      url: 'human/sort-group-H', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrH();
        }
      }
    },

    { 
      name: 'dephr-sort-group-i', 
      url: 'human/sort-group-I', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrI();
        }
      }
    },

    { 
      name: 'dephr-sort-group-j', 
      url: 'human/sort-group-J', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrJ();
        }
      }
    },

    { 
      name: 'dephr-sort-group-k', 
      url: 'human/sort-group-K', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrK();
        }
      }
    },

    { 
      name: 'dephr-sort-group-l', 
      url: 'human/sort-group-L', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrL();
        }
      }
    },

    { 
      name: 'dephr-sort-group-m', 
      url: 'human/sort-group-M', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrM();
        }
      }
    },

    { 
      name: 'dephr-sort-group-n', 
      url: 'human/sort-group-N', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrN();
        }
      }
    },

    { 
      name: 'dephr-sort-group-o', 
      url: 'human/sort-group-O', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrO();
        }
      }
    },

    { 
      name: 'dephr-sort-group-p', 
      url: 'human/sort-group-P', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrP();
        }
      }
    },

    { 
      name: 'dephr-sort-group-q', 
      url: 'human/sort-group-Q', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrQ();
        }
      }
    },

    { 
      name: 'dephr-sort-group-r', 
      url: 'human/sort-group-R', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrR();
        }
      }
    },

    { 
      name: 'dephr-sort-group-s', 
      url: 'human/sort-group-S', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrS();
        }
      }
    },

    { 
      name: 'dephr-sort-group-t', 
      url: 'human/sort-group-T', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrT();
        }
      }
    },

    { 
      name: 'dephr-sort-group-u', 
      url: 'human/sort-group-U', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrU();
        }
      }
    },

    { 
      name: 'dephr-sort-group-v', 
      url: 'human/sort-group-V', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrV();
        }
      }
    },

    { 
      name: 'dephr-sort-group-w', 
      url: 'human/sort-group-W', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrW();
        }
      }
    },

    { 
      name: 'dephr-sort-group-x', 
      url: 'human/sort-group-X', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrX();
        }
      }
    },

    { 
      name: 'dephr-sort-group-y', 
      url: 'human/sort-group-Y', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrY();
        }
      }
    },

    { 
      name: 'dephr-sort-group-z', 
      url: 'human/sort-group-Z', 
      // Using component: instead of template:
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHrZ();
        }
      }
    },








    { 
      name: 'depentr-sort-group-a', 
      url: 'entrepreneurship/sort-group-A', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrA();
        }
      }
    },

    { 
      name: 'depentr-sort-group-b', 
      url: 'entrepreneurship/sort-group-B', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrB();
        }
      }
    },

    { 
      name: 'depentr-sort-group-c', 
      url: 'entrepreneurship/sort-group-C', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrC();
        }
      }
    },

    { 
      name: 'depentr-sort-group-d', 
      url: 'entrepreneurship/sort-group-D', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrD();
        }
      }
    },

    { 
      name: 'depentr-sort-group-e', 
      url: 'entrepreneurship/sort-group-E', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrE();
        }
      }
    },

    { 
      name: 'depentr-sort-group-f', 
      url: 'entrepreneurship/sort-group-F', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrF();
        }
      }
    },

    { 
      name: 'depentr-sort-group-g', 
      url: 'entrepreneurship/sort-group-G', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrG();
        }
      }
    },

    { 
      name: 'depentr-sort-group-h', 
      url: 'entrepreneurship/sort-group-H', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrH();
        }
      }
    },

    { 
      name: 'depentr-sort-group-i', 
      url: 'entrepreneurship/sort-group-I', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrI();
        }
      }
    },

    { 
      name: 'depentr-sort-group-j', 
      url: 'entrepreneurship/sort-group-J', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrJ();
        }
      }
    },

    { 
      name: 'depentr-sort-group-k', 
      url: 'entrepreneurship/sort-group-K', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrK();
        }
      }
    },

    { 
      name: 'depentr-sort-group-l', 
      url: 'entrepreneurship/sort-group-L', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrL();
        }
      }
    },

    { 
      name: 'depentr-sort-group-m', 
      url: 'entrepreneurship/sort-group-M', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrM();
        }
      }
    },

    { 
      name: 'depentr-sort-group-n', 
      url: 'entrepreneurship/sort-group-N', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrN();
        }
      }
    },

    { 
      name: 'depentr-sort-group-o', 
      url: 'entrepreneurship/sort-group-O', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrO();
        }
      }
    },

    { 
      name: 'depentr-sort-group-p', 
      url: 'entrepreneurship/sort-group-P', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrP();
        }
      }
    },

    { 
      name: 'depentr-sort-group-q', 
      url: 'entrepreneurship/sort-group-Q', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrQ();
        }
      }
    },

    { 
      name: 'depentr-sort-group-r', 
      url: 'entrepreneurship/sort-group-R', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrR();
        }
      }
    },

    { 
      name: 'depentr-sort-group-s', 
      url: 'entrepreneurship/sort-group-S', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrS();
        }
      }
    },

    { 
      name: 'depentr-sort-group-t', 
      url: 'entrepreneurship/sort-group-T', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrT();
        }
      }
    },

    { 
      name: 'depentr-sort-group-u', 
      url: 'entrepreneurship/sort-group-U', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrU();
        }
      }
    },

    { 
      name: 'depentr-sort-group-v', 
      url: 'entrepreneurship/sort-group-V', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrV();
        }
      }
    },

    { 
      name: 'depentr-sort-group-w', 
      url: 'entrepreneurship/sort-group-W', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrW();
        }
      }
    },

    { 
      name: 'depentr-sort-group-x', 
      url: 'entrepreneurship/sort-group-X', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrX();
        }
      }
    },

    { 
      name: 'depentr-sort-group-y', 
      url: 'entrepreneurship/sort-group-Y', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrY();
        }
      }
    },

    { 
      name: 'depentr-sort-group-z', 
      url: 'entrepreneurship/sort-group-Z', 
      // Using component: instead of template:
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntrZ();
        }
      }
    },
    
    { 
      name: 'staffdirectory', 
      url: '/staffdirectory', 
      component: 'companies',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getAllCompanies();
        }
      }
    },

    { 
      name: 'home', 
      url: '/', 
      component: 'home',
      resolve: {
        home: function(HomeService) {
          return HomeService.getHome();
        }
      }
    },
    
    { 
      name: 'leadership', 
      url: '/leadership', 
      component: 'leadership',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getCompaniesStaff();
        }
      }
    },
    
    { 
      name: 'departments', 
      url: '/departments', 
      component: 'departments'
    },

    { 
      name: 'company', 
      // This state takes a URL parameter called personId
      url: '/companies/{companyId}', 
      component: 'company',
      // This state defines a 'person' resolve
      // It delegates to the PeopleService, passing the personId parameter
      resolve: {
        company: function(CompaniesService, $transition$) {
          return CompaniesService.getCompany($transition$.params().companyId);
        }
      }
    },

    { 
      name: 'accounting', 
      url: '/accounting', 
      component: 'accounting',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepAccounting();
        }
      }
    },

    { 
      name: 'banking', 
      url: '/banking', 
      component: 'banking',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepBanking();
        }
      }
    },

    { 
      name: 'marketing', 
      url: '/marketing', 
      component: 'marketing',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepMarketing();
        }
      }
    },

    { 
      name: 'decision', 
      url: '/decision', 
      component: 'decision',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepDecision();
        }
      }
    },

    { 
      name: 'human', 
      url: '/human', 
      component: 'human',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepHr();
        }
      }
    },

    { 
      name: 'entrepreneurship', 
      url: '/entrepreneurship', 
      component: 'entrepreneurship',
      resolve: {
        companies: function(CompaniesService) {
          return CompaniesService.getDepEntr();
        }
      }
    }


  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});