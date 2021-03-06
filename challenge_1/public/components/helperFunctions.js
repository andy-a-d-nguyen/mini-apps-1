export const calculateWinner = squares => {
  const winningPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < winningPattern.length; i++) {
    const [pos1, pos2, pos3] = winningPattern[i];

    if (squares[pos1] && squares[pos1] === squares[pos2] && squares[pos1] === squares[pos3]) {
      return squares[pos1];
    }
  }

  return null;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2hlbHBlckZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJjYWxjdWxhdGVXaW5uZXIiLCJzcXVhcmVzIiwid2lubmluZ1BhdHRlcm4iLCJpIiwibGVuZ3RoIiwicG9zMSIsInBvczIiLCJwb3MzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU1BLGVBQWUsR0FBSUMsT0FBRCxJQUFhO0FBQzFDLFFBQU1DLGNBQWMsR0FBRyxDQUNyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURxQixFQUVyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZxQixFQUdyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhxQixFQUlyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpxQixFQUtyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxxQixFQU1yQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQU5xQixFQU9yQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVBxQixFQVFyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVJxQixDQUF2Qjs7QUFXQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELGNBQWMsQ0FBQ0UsTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsVUFBTSxDQUFDRSxJQUFELEVBQU9DLElBQVAsRUFBYUMsSUFBYixJQUFxQkwsY0FBYyxDQUFDQyxDQUFELENBQXpDOztBQUNBLFFBQUlGLE9BQU8sQ0FBQ0ksSUFBRCxDQUFQLElBQWlCSixPQUFPLENBQUNJLElBQUQsQ0FBUCxLQUFrQkosT0FBTyxDQUFDSyxJQUFELENBQTFDLElBQW9ETCxPQUFPLENBQUNJLElBQUQsQ0FBUCxLQUFrQkosT0FBTyxDQUFDTSxJQUFELENBQWpGLEVBQXlGO0FBQ3ZGLGFBQU9OLE9BQU8sQ0FBQ0ksSUFBRCxDQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQXBCTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYWxjdWxhdGVXaW5uZXIgPSAoc3F1YXJlcykgPT4ge1xuICBjb25zdCB3aW5uaW5nUGF0dGVybiA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQsIDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5uaW5nUGF0dGVybi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFtwb3MxLCBwb3MyLCBwb3MzXSA9IHdpbm5pbmdQYXR0ZXJuW2ldO1xuICAgIGlmIChzcXVhcmVzW3BvczFdICYmIHNxdWFyZXNbcG9zMV0gPT09IHNxdWFyZXNbcG9zMl0gJiYgc3F1YXJlc1twb3MxXSA9PT0gc3F1YXJlc1twb3MzXSkge1xuICAgICAgcmV0dXJuIHNxdWFyZXNbcG9zMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59Il19