export default `
<div>
  <span>{{$ctrl.description}}</span>
  <b>{{$ctrl.done}}</b>

  <button type="button" ng-click="$ctrl.markAsDone($ctrl.id)" ng-if="!$ctrl.done">
    Done
  </button>

  <button type="button" ng-click="$ctrl.markAsUndone($ctrl.id)" ng-if="$ctrl.done">
    Undone
  </button>
</div>
`