angular.module('jareina')
.config(Log);
Log.$inject =['$logProvider'];
function Log($logProvider){
  $logProvider.debugEnabled([true]);
}
