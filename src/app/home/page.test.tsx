import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/app/home/page";
import "@testing-library/jest-dom";

// ✅ Mock dynamic import
jest.mock("next/dynamic", () => {
  const MockDynamic = () => <div>ProductSlider (Dynamic)</div>;
  MockDynamic.displayName = "MockDynamic";
  return () => MockDynamic;
});

// ✅ All component mocks — no custom variable needed
jest.mock("@/components/categories/ListCategory", () => (
  <div>ListCategory</div>
));
jest.mock("@/components/CarouselComponent", () => <div>CarouselComponent</div>);
interface MockSliderHeaderProps {
  identity?: string;
  heading?: string;
}

function MockSliderHeader(props: MockSliderHeaderProps) {
  return (
    <div>
      {props.identity} - {props.heading}
    </div>
  );
}
MockSliderHeader.displayName = "MockSliderHeader";

jest.mock("@/components/SliderHeader", () => MockSliderHeader);
// const MockProductSlider = () => <div>ProductSlider</div>;
// MockProductSlider.displayName = "MockProductSlider";
jest.mock("@/components/ImageSlider/ProductSlider", () => (
  <div>ProductSlider</div>
));
// const MockCategorySlider = () => <div>CategorySlider</div>;
// MockCategorySlider.displayName = "MockCategorySlider";
jest.mock("@/components/ImageSlider/CategorySlider", () => (
  <div>CategorySlider</div>
));
// const MockCategoryBanner = () => <div>CategoryBanner</div>;
// MockCategoryBanner.displayName = "MockCategoryBanner";
jest.mock("@/components/CategoryBanner", () => <div>CategoryBanner</div>);
// const MockNewArrival = () => <div>NewArrival</div>;
// MockNewArrival.displayName = "MockNewArrival";
jest.mock("@/components/NewArrival", () => <div>NewArrival</div>);
interface MockServiceComponentProps {
  services?: { title: string }[];
}

function MockServiceComponent(props: MockServiceComponentProps) {
  return <div>ServiceComponent - {props.services?.length}</div>;
}
MockServiceComponent.displayName = "MockServiceComponent";

jest.mock("@/components/common/ServiceComponent", () => MockServiceComponent);

// ✅ Mock fetch
global.fetch = jest.fn((url: string) => {
  if (url.includes("/services.json")) {
    return Promise.resolve({
      json: () =>
        Promise.resolve([{ title: "Free Shipping" }, { title: "Support" }]),
    });
  }
  if (url.includes("/home/api")) {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          flashProducts: [{ id: 1 }],
          products: [{ id: 2 }],
        }),
    });
  }
  return Promise.reject("Unknown endpoint");
}) as jest.Mock;

// ✅ Test block
describe("Home Page", () => {
  it("renders all sections correctly", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText("ListCategory")).toBeInTheDocument();
      expect(screen.getByText("CarouselComponent")).toBeInTheDocument();
      expect(screen.getByText("Today's - Flash Sales")).toBeInTheDocument();
      expect(screen.getByText("CategorySlider")).toBeInTheDocument();
      expect(
        screen.getByText("This Month - Best Selling Products")
      ).toBeInTheDocument();
      expect(screen.getByText("CategoryBanner")).toBeInTheDocument();
      expect(screen.getByText("Explore Our Products")).toBeInTheDocument();
      expect(screen.getByText("NewArrival")).toBeInTheDocument();
      expect(screen.getByText("ServiceComponent - 2")).toBeInTheDocument();
    });
  });
});
