<template>
  <div id="item-container">
    <div class="check-container">
      <input type="checkbox" :checked="todoItem.completed" @click="$emit('change-state',$event)">
    </div>
    <div class="info-container" :class="{done: todoItem.completed}">{{ todoItem.content }}</div>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["todoItem"]
}
</script>

<style scoped>
#item-container {
  background: var(--v_bg2);
  width: 96%;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 8px;
  margin: 8px 0;
}

.check-container {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-container input:hover {
  background: gray;
}

.check-container input:checked {
  background: var(--v_primary);
}

.check-container input {
  width: 25px;
  height: 25px;
  border: solid 1px var(--v_primary);
  -webkit-border-radius: 50%;
  border-radius: 50%;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-appearance: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: background-color ease 0.2s;
  transition: background-color ease 0.2s;
  outline: none;
}

.check-container input::after {
  content: '';
  top: 5px;
  left: 5px;
  position: absolute;
  background: transparent;
  border: var(--v_bg2) solid 2px;
  border-top: none;
  border-right: none;
  height: 6px;
  width: 10px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.info-container.done {
  text-decoration: line-through;
  font-style: italic;
  color: gray;
}

</style>