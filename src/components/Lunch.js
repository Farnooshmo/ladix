function Lunch() {
  return (
    <div>
      <label for="lunch">Lunch</label>
      <select id="lunch" name="lunch">
        <option value="lunch" selected>
          lunch
        </option>
        <option value="cheese">Cheese</option>
        <option value="egg">Egg</option>
        <option value="Yoghurt">Yoghurt</option>
      </select>
    </div>
  );
}

export default Lunch;
