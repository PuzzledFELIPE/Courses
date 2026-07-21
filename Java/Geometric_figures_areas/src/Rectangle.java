public record Rectangle(double base, double height) implements GeometricForm {
    @Override
    public double getArea() {
        return height*base;
    }
}
