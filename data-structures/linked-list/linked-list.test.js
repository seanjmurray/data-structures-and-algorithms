'use strict';

const LinkedList = require('./linked-list.js');

it('should insantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

it('should add to empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  expect(ll.head.value).toBe('apples');
});

it('should add to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
});

it('should append to empty list', () => {
  const ll = new LinkedList();
  ll.append('apples');
  expect(ll.head.value).toBe('apples');
});

it('should append to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');

  ll.append('cucumbers');

  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');

  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next).toBe(null);


});
it('should return true if value is included', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.includes('bananas')).toBe(true)
});
it('should return false if value is not included', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');
  expect(ll.includes('banana')).toBe(false)
});
it('should insert before the value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.append('bananas');
  ll.append('cucumbers');
  ll.insertBefore('bananas','grapes')
  expect(ll.head.next.value).toBe('grapes')
  expect(ll.head.next.next.value).toBe('bananas')
});
it('should insert after the value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.append('bananas');
  ll.append('cucumbers');
  ll.insertAfter('bananas','grapes')
  console.log(ll)
  expect(ll.head.next.value).toBe('bananas')
  expect(ll.head.next.next.value).toBe('grapes')
  expect(ll.head.next.next.next.value).toBe('cucumbers')

});
it('should insert before the value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.append('bananas');
  ll.append('cucumbers');
  ll.insertBefore('apples','grapes')
  expect(ll.head.value).toBe('grapes')
  expect(ll.head.next.value).toBe('apples')
});
it('should insert after the value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.append('bananas');
  ll.append('cucumbers');
  ll.insertAfter('apples','grapes')
  console.log(ll)
  expect(ll.head.value).toBe('apples')
  expect(ll.head.next.value).toBe('grapes')
  expect(ll.head.next.next.value).toBe('bananas')
});
it('should output a string', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.append('bananas');
  ll.append('cucumbers');
  ll.append('bananas');
  ll.append('cucumbers');
  expect(ll.toString()).toBe('apples -> bananas -> cucumbers -> bananas -> NULL')
})
