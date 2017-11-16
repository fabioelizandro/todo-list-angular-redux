export default `
<div>
  <div class="container">
    <div class="row">
      <div class="col-12" ng-repeat="task in $ctrl.tasks track by task.id">
        <task-item 
          id="task.id" 
          description="task.description"
          done="task.done">
        </task-item>        
      </div>
    </div>    
  </div>
</div>
`