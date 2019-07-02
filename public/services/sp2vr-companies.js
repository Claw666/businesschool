angular.module('angularApp').service('CompaniesService', function($http) {
  var service = {
    getAllCompanies: function() {
      return $http.get('/sp2vr/sort-group-all', { cache: true }).then(function(resp) {
        return resp.data;
      });

    },

    getHome: function() {
      return $http.get('/sp2vr/home-page', { cache: true }).then(function(resp) {
        return resp.data;
      });

    },

    
    getCompaniesA: function() {
      return $http.get('/sp2vr/sort-group-A', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesB: function() {
      return $http.get('/sp2vr/sort-group-B', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesC: function() {
      return $http.get('/sp2vr/sort-group-C', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesD: function() {
      return $http.get('/sp2vr/sort-group-D', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesE: function() {
      return $http.get('/sp2vr/sort-group-E', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesF: function() {
      return $http.get('/sp2vr/sort-group-F', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesG: function() {
      return $http.get('/sp2vr/sort-group-G', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesH: function() {
      return $http.get('/sp2vr/sort-group-H', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesI: function() {
      return $http.get('/sp2vr/sort-group-I', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesJ: function() {
      return $http.get('/sp2vr/sort-group-J', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesK: function() {
      return $http.get('/sp2vr/sort-group-K', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getCompaniesL: function() {
      return $http.get('/sp2vr/sort-group-L', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesM: function() {
      return $http.get('/sp2vr/sort-group-M', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesN: function() {
      return $http.get('/sp2vr/sort-group-N', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesO: function() {
      return $http.get('/sp2vr/sort-group-O', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesP: function() {
      return $http.get('/sp2vr/sort-group-P', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesQ: function() {
      return $http.get('/sp2vr/sort-group-Q', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesR: function() {
      return $http.get('/sp2vr/sort-group-R', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesS: function() {
      return $http.get('/sp2vr/sort-group-S', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesT: function() {
      return $http.get('/sp2vr/sort-group-T', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesU: function() {
      return $http.get('/sp2vr/sort-group-U', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesV: function() {
      return $http.get('/sp2vr/sort-group-V', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesW: function() {
      return $http.get('/sp2vr/sort-group-W', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesX: function() {
      return $http.get('/sp2vr/sort-group-X', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesY: function() {
      return $http.get('/sp2vr/sort-group-Y', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesZ: function() {
      return $http.get('/sp2vr/sort-group-Z', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getCompaniesStaff: function() {
      return $http.get('/sp2vr/leadershipteam', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },



    getDepAccounting: function() {
      return $http.get('/sp2vr/depaccounting', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBanking: function() {
      return $http.get('/sp2vr/depbanking', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketing: function() {
      return $http.get('/sp2vr/depmarketing', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecision: function() {
      return $http.get('/sp2vr/depdecision', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHr: function() {
      return $http.get('/sp2vr/dephr', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntr: function() {
      return $http.get('/sp2vr/depentr', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },


    getDepAccountingA: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-a', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingB: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-b', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingC: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-c', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingD: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-d', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingE: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-e', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingF: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-f', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingG: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-g', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingH: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-h', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingI: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-i', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingJ: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-j', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingK: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-k', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepAccountingL: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-l', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingM: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-m', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingN: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-n', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingO: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-o', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingP: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-p', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingQ: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-q', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingR: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-r', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingS: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-s', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingT: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-t', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingU: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-u', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingV: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-v', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingW: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-w', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingX: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-x', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingY: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-y', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepAccountingZ: function() {
      return $http.get('/sp2vr/depaccounting-sort-group-z', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },







    getDepBankingA: function() {
      return $http.get('/sp2vr/depbanking-sort-group-a', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingB: function() {
      return $http.get('/sp2vr/depbanking-sort-group-b', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingC: function() {
      return $http.get('/sp2vr/depbanking-sort-group-c', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingD: function() {
      return $http.get('/sp2vr/depbanking-sort-group-d', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingE: function() {
      return $http.get('/sp2vr/depbanking-sort-group-e', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingF: function() {
      return $http.get('/sp2vr/depbanking-sort-group-f', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingG: function() {
      return $http.get('/sp2vr/depbanking-sort-group-g', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingH: function() {
      return $http.get('/sp2vr/depbanking-sort-group-h', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingI: function() {
      return $http.get('/sp2vr/depbanking-sort-group-i', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingJ: function() {
      return $http.get('/sp2vr/depbanking-sort-group-j', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingK: function() {
      return $http.get('/sp2vr/depbanking-sort-group-k', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepBankingL: function() {
      return $http.get('/sp2vr/depbanking-sort-group-l', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingM: function() {
      return $http.get('/sp2vr/depbanking-sort-group-m', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingN: function() {
      return $http.get('/sp2vr/depbanking-sort-group-n', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingO: function() {
      return $http.get('/sp2vr/depbanking-sort-group-o', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingP: function() {
      return $http.get('/sp2vr/depbanking-sort-group-p', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingQ: function() {
      return $http.get('/sp2vr/depbanking-sort-group-q', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingR: function() {
      return $http.get('/sp2vr/depbanking-sort-group-r', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingS: function() {
      return $http.get('/sp2vr/depbanking-sort-group-s', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingT: function() {
      return $http.get('/sp2vr/depbanking-sort-group-t', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingU: function() {
      return $http.get('/sp2vr/depbanking-sort-group-u', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingV: function() {
      return $http.get('/sp2vr/depbanking-sort-group-v', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingW: function() {
      return $http.get('/sp2vr/depbanking-sort-group-w', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingX: function() {
      return $http.get('/sp2vr/depbanking-sort-group-x', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingY: function() {
      return $http.get('/sp2vr/depbanking-sort-group-y', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepBankingZ: function() {
      return $http.get('/sp2vr/depbanking-sort-group-z', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },








    getDepDecisionA: function() {
      return $http.get('/sp2vr/depdecision-sort-group-a', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionB: function() {
      return $http.get('/sp2vr/depdecision-sort-group-b', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionC: function() {
      return $http.get('/sp2vr/depdecision-sort-group-c', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionD: function() {
      return $http.get('/sp2vr/depdecision-sort-group-d', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionE: function() {
      return $http.get('/sp2vr/depdecision-sort-group-e', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionF: function() {
      return $http.get('/sp2vr/depdecision-sort-group-f', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionG: function() {
      return $http.get('/sp2vr/depdecision-sort-group-g', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionH: function() {
      return $http.get('/sp2vr/depdecision-sort-group-h', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionI: function() {
      return $http.get('/sp2vr/depdecision-sort-group-i', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionJ: function() {
      return $http.get('/sp2vr/depdecision-sort-group-j', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionK: function() {
      return $http.get('/sp2vr/depdecision-sort-group-k', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepDecisionL: function() {
      return $http.get('/sp2vr/depdecision-sort-group-l', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionM: function() {
      return $http.get('/sp2vr/depdecision-sort-group-m', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionN: function() {
      return $http.get('/sp2vr/depdecision-sort-group-n', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionO: function() {
      return $http.get('/sp2vr/depdecision-sort-group-o', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionP: function() {
      return $http.get('/sp2vr/depdecision-sort-group-p', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionQ: function() {
      return $http.get('/sp2vr/depdecision-sort-group-q', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionR: function() {
      return $http.get('/sp2vr/depdecision-sort-group-r', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionS: function() {
      return $http.get('/sp2vr/depdecision-sort-group-s', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionT: function() {
      return $http.get('/sp2vr/depdecision-sort-group-t', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionU: function() {
      return $http.get('/sp2vr/depdecision-sort-group-u', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionV: function() {
      return $http.get('/sp2vr/depdecision-sort-group-v', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionW: function() {
      return $http.get('/sp2vr/depdecision-sort-group-w', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionX: function() {
      return $http.get('/sp2vr/depdecision-sort-group-x', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionY: function() {
      return $http.get('/sp2vr/depdecision-sort-group-y', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepDecisionZ: function() {
      return $http.get('/sp2vr/depdecision-sort-group-z', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },










    getDepMarketingA: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-a', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingB: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-b', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingC: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-c', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingD: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-d', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingE: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-e', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingF: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-f', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingG: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-g', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingH: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-h', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingI: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-i', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingJ: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-j', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingK: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-k', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepMarketingL: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-l', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingM: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-m', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingN: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-n', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingO: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-o', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingP: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-p', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingQ: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-q', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingR: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-r', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingS: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-s', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingT: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-t', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingU: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-u', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingV: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-v', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingW: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-w', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingX: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-x', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingY: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-y', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepMarketingZ: function() {
      return $http.get('/sp2vr/depmarketing-sort-group-z', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },








    getDepHrA: function() {
      return $http.get('/sp2vr/dephr-sort-group-a', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrB: function() {
      return $http.get('/sp2vr/dephr-sort-group-b', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrC: function() {
      return $http.get('/sp2vr/dephr-sort-group-c', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrD: function() {
      return $http.get('/sp2vr/dephr-sort-group-d', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrE: function() {
      return $http.get('/sp2vr/dephr-sort-group-e', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrF: function() {
      return $http.get('/sp2vr/dephr-sort-group-f', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrG: function() {
      return $http.get('/sp2vr/dephr-sort-group-g', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrH: function() {
      return $http.get('/sp2vr/dephr-sort-group-h', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrI: function() {
      return $http.get('/sp2vr/dephr-sort-group-i', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrJ: function() {
      return $http.get('/sp2vr/dephr-sort-group-j', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrK: function() {
      return $http.get('/sp2vr/dephr-sort-group-k', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepHrL: function() {
      return $http.get('/sp2vr/dephr-sort-group-l', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrM: function() {
      return $http.get('/sp2vr/dephr-sort-group-m', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrN: function() {
      return $http.get('/sp2vr/dephr-sort-group-n', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrO: function() {
      return $http.get('/sp2vr/dephr-sort-group-o', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrP: function() {
      return $http.get('/sp2vr/dephr-sort-group-p', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrQ: function() {
      return $http.get('/sp2vr/dephr-sort-group-q', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrR: function() {
      return $http.get('/sp2vr/dephr-sort-group-r', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrS: function() {
      return $http.get('/sp2vr/dephr-sort-group-s', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrT: function() {
      return $http.get('/sp2vr/dephr-sort-group-t', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrU: function() {
      return $http.get('/sp2vr/dephr-sort-group-u', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrV: function() {
      return $http.get('/sp2vr/dephr-sort-group-v', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrW: function() {
      return $http.get('/sp2vr/dephr-sort-group-w', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrX: function() {
      return $http.get('/sp2vr/dephr-sort-group-x', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrY: function() {
      return $http.get('/sp2vr/dephr-sort-group-y', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepHrZ: function() {
      return $http.get('/sp2vr/dephr-sort-group-z', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },









    getDepEntrA: function() {
      return $http.get('/sp2vr/depentr-sort-group-a', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrB: function() {
      return $http.get('/sp2vr/depentr-sort-group-b', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrC: function() {
      return $http.get('/sp2vr/depentr-sort-group-c', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrD: function() {
      return $http.get('/sp2vr/depentr-sort-group-d', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrE: function() {
      return $http.get('/sp2vr/depentr-sort-group-e', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrF: function() {
      return $http.get('/sp2vr/depentr-sort-group-f', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrG: function() {
      return $http.get('/sp2vr/depentr-sort-group-g', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrH: function() {
      return $http.get('/sp2vr/depentr-sort-group-h', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrI: function() {
      return $http.get('/sp2vr/depentr-sort-group-i', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrJ: function() {
      return $http.get('/sp2vr/depentr-sort-group-j', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrK: function() {
      return $http.get('/sp2vr/depentr-sort-group-k', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },

    getDepEntrL: function() {
      return $http.get('/sp2vr/depentr-sort-group-l', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrM: function() {
      return $http.get('/sp2vr/depentr-sort-group-m', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrN: function() {
      return $http.get('/sp2vr/depentr-sort-group-n', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrO: function() {
      return $http.get('/sp2vr/depentr-sort-group-o', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrP: function() {
      return $http.get('/sp2vr/depentr-sort-group-p', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrQ: function() {
      return $http.get('/sp2vr/depentr-sort-group-q', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrR: function() {
      return $http.get('/sp2vr/depentr-sort-group-r', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrS: function() {
      return $http.get('/sp2vr/depentr-sort-group-s', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrT: function() {
      return $http.get('/sp2vr/depentr-sort-group-t', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrU: function() {
      return $http.get('/sp2vr/depentr-sort-group-u', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrV: function() {
      return $http.get('/sp2vr/depentr-sort-group-v', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrW: function() {
      return $http.get('/sp2vr/depentr-sort-group-w', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrX: function() {
      return $http.get('/sp2vr/depentr-sort-group-x', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrY: function() {
      return $http.get('/sp2vr/depentr-sort-group-y', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },
    getDepEntrZ: function() {
      return $http.get('/sp2vr/depentr-sort-group-z', { cache: true }).then(function(resp) {
        return resp.data;
      });
    
    },


    getCompany: function(id) {
      function companyMatchesParam(company) {
        return company._id === id;

      }
      
      return service.getAllCompanies().then(function (companies) {
        return companies.find(companyMatchesParam);
      });
    }

  }

  return service;
})
