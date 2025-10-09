package scenario5.fullstack.demo.demo.src.main.java.com.example.demo.controller;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService service;

    @PostMapping
    public EmployeeDto addEmployee(@RequestBody Employee emp){
        return service.save(emp);
    }

    @GetMapping
    public Page<EmployeeDto> listEmployees(@RequestParam int default page = 10, @RequestParam int size){
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());
        return service.listEmployees(pageable);
    }
}
